class SessionsController < ApplicationController
    skip_before_action :verified_user, only: [:new, :create]
  
    def new
      @user = User.new
    end
  
    def create # receives data submitted in login form, authenticates and logs in a valid user
      if auth
        @user = User.find_or_create_by(uid: auth['uid']) do |u|
          u.name = auth['info']['name']
          u.email = auth['info']['email']
          u.password = SecureRandom.hex
        end
        session[:user_id] = @user.id
        render json: @user 
        
      elsif @user = User.find_by(email: params[:email])
        @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id # log in the user
        # message: "You successfully logged in! Welcome, #{@user.name}!"
        render json: {message: "You successfully logged in! Welcome, #{@user.name}!"}
      
      else # present login form so user can try logging in again
      #need to define user so the message will show and so the errors have a variable to refer to
        @user = User.new
        # flash[:message] = "Your login attempt was unsuccessful. Please enter a valid email and password combination or try signing up."
        render json: {message: "Your login attempt was unsuccessful. Please enter a valid email and password combination or try signing up."}
      end
    end
  
    def destroy
      session.clear
      render json: {message: "logged out"}
    end
    
    private 
  
    def auth
      request.env['omniauth.auth']
    end
    
  end