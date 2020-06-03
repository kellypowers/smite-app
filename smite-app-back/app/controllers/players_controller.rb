class PlayersController < ApplicationController
     before_action :set_smitepai! 

    def index 
        @player = @smite_api.get_player([params.player_name, params.portalID.to_i])
        puts "params are #{params}"
        render json: @player, status: 200
    end

    def show
        @player = @smite_api.get_player([params.player_name, params.portalID.to_i])
        puts "params are #{params}"
        render json: @player

        # render json: @character.to_json(:include => {:player => {:only => [:player_id, :player_name]} })

    end

    def create
        @player = @smite_api.get_player([params.player_name, params.portalID.to_i])
        # player = Player.find_or_create_by(player_id: params[:player_id])
        puts "player is #{@player}"
        
        if @player.save 
            render json: @player, status: 200
        else
            puts "unsuccessful"
            render plain: "unsuccessful"
        end
    end
    
    def update 


    end

    def destroy
        puts "params are #{params}"
        player = Player.find(params[:id])
        player.delete

        render json: {player_id: player.id}
    end

    private
    def player_params 
        params.require(:player).permit()
    end

    def set_smiteapi!
        @smite_api = SmiteApi.new
    end

end