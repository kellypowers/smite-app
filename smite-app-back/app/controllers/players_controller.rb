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
        puts "params are #{params}"
        player = @smite_api.get_player([params["player"]["player_name"], params["player"]["portal_id"].to_i])
        puts "player is #{player}"
        render json: player[0].to_json(:include => {:portal_id => params["player"]["portal_id"] })    
    end

    def get_player_with_id
        # elastic search?? 
        puts "params are #{params}"
        player = @smite_api.get_player_with_id(params["player"]["playerId"])
        puts "player is #{player}"
        render json: player[0].to_json(:include => {:portal_id => params["player"]["portal_id"] })    
    end

    def find_player_matches
        puts "params are #{params}"
        player_match_history = @smite_api.get_match_history(params["player"])
        puts "player match histry is #{player_match_history}"
        render plain: player_match_history
    end
    def get_god_ranks
        puts "params are #{params}"
        player_god_ranks = @smite_api.get_god_ranks(params["player"].to_i)
        puts "player god ranks is #{player_god_ranks}"
        render plain: player_god_ranks   
    end
    def get_player_achievements
        puts "params are #{params}"
        player_acheivements = @smite_api.get_player_achievements(params["player"]["player_id"].to_i)
        puts "player achieves is #{player_achievements}"
        render json: player_achievements   
    end

    def get_match_details
        puts "params are #{params}"
        match_details = @smite_api.get_match_details(params['matchid'].to_i)
        puts "match dets is #{match_details}"
        render plain: match_details   
    end

    # def get_clan_info
    #     puts "params are #{params}"
    #     clan_players = @smite_api.get_team_players(params['clanId'].to_i)
    #     clan = @smite_api.get_clan_info(params['clanId'].to_i)
    #     puts "clan is #{clan}"
    #     render plain: clan + clan_players 
    # end
    def get_clan_info
        puts "params are #{params}"
        clan = @smite_api.get_team_players(params['clanId'].to_i)
        clan_info = @smite_api.get_team_details(params['clanId'].to_i)
        puts "clan is #{clan}"
        render plain: clan
    end
    
    def update 
        @matches_player = @smite_api.get_match_history([params["player"]["player_name"], params["player"]["portal_id"].to_i])
        render json: @player
    end


    private

    def set_smiteapi!
        @smite_api = SmiteApi.new
    end

end