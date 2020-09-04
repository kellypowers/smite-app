class ItemsController < ApplicationController
    before_action :set_smiteapi! 

    def index 
        @items = Item.all
        render json: @items
    end
 
    def show
         puts "params are #{params}"
        @item = Item.find_by(name: params[:name])
        render json: @item
 
    end
 
    private

    def set_smiteapi!
        @smite_api = SmiteApi.new
    end
 
 
 
 
 end