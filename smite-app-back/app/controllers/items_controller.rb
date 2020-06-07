class ItemsController < ApplicationController
    

    def index 
        @items = Item.all
        render json: @items
    end
 
    def show
         puts "params are #{params}"
        @item = Item.find_by(name: params[:name])
        render json: @item
 
    end
 
    
 
 
 
 end