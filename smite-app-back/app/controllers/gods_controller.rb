class GodsController < ApplicationController
    before_action :set_smiteapi! 

    def index 
        @gods = God.all
        render json: @gods
    end
 
    def show
         puts "params are #{params}"
        @god = God.find_by(name: params[:name])
        render json: @god
 
    end

   
   private

   def set_smiteapi!
       @smite_api = SmiteApi.new
   end


end