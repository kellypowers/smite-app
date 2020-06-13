class PlayersController < ApplicationController
     before_action :set_smiteapi! 

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
        # elastic search?? 
        puts "params are #{params}"
        player = @smite_api.get_player([params["player"]["player_name"], params["player"]["portal_id"].to_i])
        puts "player is #{player}"
        render json: player[0].to_json(:include => {:portal_id => params["player"]["portal_id"] })    
    end

    def find_player_matches
        # elastic search?? 
        puts "params are #{params}"
        player_match_history = @smite_api.get_match_history(params["player"]["player_id"])
        puts "player match histry is #{player_match_history}"
        render plain: player_match_history
    end
    def get_god_ranks
        # elastic search?? _
        puts "params are #{params}"
        player_god_ranks = @smite_api.get_god_ranks(params["player"]["player_id"].to_i)
        puts "player god ranks is #{player_god_ranks}"
        render json: player_god_ranks   
    end
    def get_player_achievements
        # elastic search?? 
        puts "params are #{params}"
        player_acheivements = @smite_api.get_player_achievements(params["player"]["player_id"].to_i)
        puts "player achieves is #{player_achievements}"
        render json: player_achievements   
    end

    def get_match_details
        # elastic search?? 
        puts "params are #{params}"
        match_details = @smite_api.get_match_details(params['player']['matchid'].to_i)
        puts "match dets is #{match_details}"
        render json: match_details   
    end
    
    def update 
        @matches_player = @smite_api.get_match_history([params["player"]["player_name"], params["player"]["portal_id"].to_i])
        render json: @player
    end

    # def destroy
    #     puts "params are #{params}"
    #     player = Player.find(params[:id])
    #     player.delete

    #     render json: {player_id: player.id}
    # end

    private
    # def player_params 
    #     params.require(:player).permit()
    # end

    def set_smiteapi!
        @smite_api = SmiteApi.new
    end

end