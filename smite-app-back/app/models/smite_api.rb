require 'digest'
require 'net/http'
require 'httparty'
require 'json'
require 'pry'
# require 'datetime'
class SmiteApi 
    # include DateAndTimeMethods
    attr_accessor :url, :format, :session #:dev_id, :auth_key,

    def initialize() #(url, dev_id, auth_key, format='Json')
        self.url = 'http://api.smitegame.com/smiteapi.svc'
        # self.dev_id = ENV['SMITE_DEV_ID']
        # self.auth_key = ENV['SMITE_AUTH_KEY']
        self.format = 'Json'
        self.session = nil
    end
    # Digest::MD5.hexdigest 'abc'

    def create_signature(method_name)
        now = self.create_timestamp()
        return Digest::MD5.hexdigest ("#{ENV['SMITE_DEV_ID']}" + "#{method_name}" + "#{ENV['SMITE_AUTH_KEY']}" + "#{now}")
    end

    def create_timestamp()
        return Time.now.utc.strftime("%Y%m%d%H%M%S")
    end

    def method(method_name)
        return ([method_name, self.format]).join('')
    end

    def get_session()
        if self.session
            return self.session
        end

        timestamp = self.create_timestamp()
        signature = self.create_signature('createsession')
        method = self.method('createsession')

        url = ([self.url, method, ENV['SMITE_DEV_ID'], signature, timestamp]).join('/')
        # puts url
        response = HTTParty.get(url)
        puts response.body
        # response = HTTParty.get(url)
        # response = response.to_json
        # puts "json response is #{response}"
        # binding.pry
        session_id = response['session_id']
        puts "session id id #{session_id}"
        self.session = session_id
        return session_id
    end

    def build_request(method_name, values=[])

        if values.is_a?(Array) 
            values = values
        else 
            values = [values]
        end

        timestamp = self.create_timestamp()
        signature = self.create_signature(method_name)
        session = self.get_session()
        method = self.method(method_name)

        url_params = [
            self.url,
            method,
            ENV['SMITE_DEV_ID'],
            signature,
            session,
            timestamp
        ] + values
            # binding.pry
        return (url_params).join('/')
    end

    def make_request(method, values)
        puts 'making request'
        request = self.build_request(method, values)
        # try:
        # binding.pry
        response = HTTParty.get(request)
        puts 'here'
        puts response.body
        return response.json()
        # except:
        # puts 'here 2'
        # puts response._content
        # return response._content
    end

    def make_request_async(method, values)
        request = self.build_request(method, values)
        # binding.pry
        return HTTParty.get(request)
    end

    def get_players(players)
        if players.is_a?(Array)
            players = players
        else
            players = [players]
        end
        # players = players if type(players) == list else [players]
        responses = players.map{|player| self.get_player(player)}
        # return [response.json() for response in responses]
        return responses.map{|response| response.json()}
    end

    def get_player(player_name)
        request = self.make_request_async('getplayer', player_name)
        player_id = request[0]['ActivePlayerId']
        puts "player id is #{player_id}"
        # binding.pry
        return self.make_request_async('getplayer', player_id)
    end
    def get_player_with_id(player_id)

        return self.make_request_async('getplayer', player_name)
    end

    def get_match_history(player_name)
        return self.make_request_async('getmatchhistory', player_name)
    end

    def get_team_players(clan)
        return self.make_request('getteamplayers', clan)
    end

    def search_teams(clan)
        return self.make_request('searchteams', clan)
    end

    def get_match_histories(players)
        # players = players if type(players) == list else [players]
        if players.is_a?(Array)
            players = players
        else
            players = [players]
        end
        responses = players.map{|player| self.get_match_history(player)}
        puts responses
        return responses.map{|response| response.json()}
    end

    def get_gods()
        return self.make_request('getgods', '1')
    end

    def get_match_details(match_ids)
        return self.make_request('getmatchdetailsbatch', match_ids)
    end
end