class GodsController < ApplicationController
    

   def index 
       @gods = God.all
       render json: @gods
   end

   def show
        puts "params are #{params}"
       @god = God.find_by(name: params[:name])
       render json: @god

   end

   



end