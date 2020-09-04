require 'digest'
require 'net/http'
require 'httparty'
require 'json'
require 'pry'

class SmiteApi 

    attr_accessor :url, :format, :session 

    def initialize() 
        self.url = 'http://api.smitegame.com/smiteapi.svc'
        self.format = 'Json'
        self.session = nil
    end


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
        response = HTTParty.get(url)
        # puts response.body
        session_id = response['session_id']
        # puts "session id id #{session_id}"
        self.session = session_id
        return session_id
    end

    def build_request(method_name, values=[])

        if values.is_a?(Array) 
            values = values
        else 
            values = Array(values)
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
        response = HTTParty.get(request)
        puts 'here'
        puts "method is #{method} values is #{values}"
        puts response.body
        return response
    end

    def make_request_async(method, values)
        request = self.build_request(method, values)
        response = HTTParty.get(request)
        # puts response.body
        return response
    end

    def get_players(players)
        if players.is_a?(Array)
            players = players
        else
            players = [players]
        end
        responses = players.map{|player| self.get_player(player)}
        return responses.map{|response| response.json()}
    end

    def get_player_id(player_name)
        request = self.make_request_async('getplayer', player_name)
        player_id = request[0]['ActivePlayerId']
        return player_id 
    end

    def get_player_with_id(playerId)
        return self.make_request_async('getplayer', player_id)
    end

    def get_player(player_name)
        request = self.make_request_async('getplayer', player_name)
        player_id = request[0]['ActivePlayerId']
        # puts "player id is #{player_id}"
        # binding.pry
        return self.make_request_async('getplayer', player_id)
    end
    def get_player_with_id(player_id)

        return self.make_request_async('getplayer', player_id)
    end

    def get_match_history(player_id)
        # player_id = self.get_player_id(player_name)
        return self.make_request_async('getmatchhistory', player_id)
    end

    def get_player_achievements(player_id)
        # player_id = self.get_player_id(player_name)
        return self.make_request_async('getplayerachievements', player_id)
    end

    def get_god_recommended_items(god_id)
        return self.make_request_async('getgodrecommendeditems', god_id)
    end

    def get_server_status()
    end

    def get_data_used()
        return self.make_request('getdataused')
    end

    def get_god_ranks(player_id)
        # player_id = self.get_player_id(player_name)
        return self.make_request_async('getgodranks', player_id)
    end

    def get_team_players(clan)
        return self.make_request('getteamplayers', clan)
    end

    def search_teams(clan)
        return self.make_request('searchteams', clan)
    end
    def get_team_details(clan)
        return self.make_request('getteamdetails', clan)
    end
    def get_team_players(clan)
        return self.make_request('getteamplayers', clan)
    end

    def get_team_hist(clan)
        return self.make_request('getteammatchhistory', clan)
    end

    def get_match_histories(players)
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

    def get_items()
        return self.make_request('getitems', '1')
    end

    def get_match_details(match_ids)
        return self.make_request('getmatchdetailsbatch', match_ids)
    end

    def get_item_info()
        array = []
        item_info = self.make_request('getitems', '1')
        item_info.each do |god| 
            hash = {
                name: god["DeviceName"],
                item_id: god["ItemId"],
                item_tier: god["ItemTier"],
                price: god["Price"],
                short_description: god["ShortDesc"],
                item_image: god["itemIcon_URL"],
                item_secondary_description: god["ItemDescription"]["SecondaryDescription"],
            }
        array.push(hash)
        end
        # return array.find_all{|i| i['item_tier'] == 3}
        return array

    end

    def get_item_info2()
        array = []
        item_info = self.make_request('getitems', '1')
        item_info.each do |item|
            hash = {
                name: item["DeviceName"],
                item_id: item["ItemId"],
                item_tier: item["ItemTier"],
                price: item["Price"],
                short_description: item["ShortDesc"],
                item_image: item["itemIcon_URL"],
                item_secondary_description: item["ItemDescription"]["SecondaryDescription"],
                item_stat: item["ItemDescription"]["Menuitems"].map{|i| "#{i['Description']} - #{i['Value']}"}.join(" "),
                active_flag: item["ActiveFlag"]
            }
            array.push(hash)
        end
        array2 = array.find_all{|i| i[:active_flag] == "y"}
        array3 = array2.find_all{|i| i[:item_tier] == 3}
        return array3
    end


    def get_gods_info()
        array = []
        gods_info = self.get_gods()
        gods_info.each do |god| 
            hash = {
                name: god["Name"],
                pantheon: god["Pantheon"],
                lore: god["Lore"],
                roles: god["Roles"],
                title: god["Title"],
                god_kind: god["Type"],
                pros: god["Pros"],
                god_id: god["id"],
                god_image: god["godCard_URL"],
                ability1: god["Ability1"],
                ability1_description: god["Ability_1"]["Description"]["itemDescription"]["description"],
                ability1_cooldown: god["Ability_1"]["Description"]["itemDescription"]["cooldown"],
                ability1_id: god["AbilityId1"],
                ability1_type: god["Ability_1"]["Description"]["itemDescription"]["menuitems"][0]["value"],
                ability1_image: god["godAbility1_URL"],
                ability2: god["Ability2"],
                ability2_description: god["Ability_2"]["Description"]["itemDescription"]["description"],
                ability2_cooldown: god["Ability_2"]["Description"]["itemDescription"]["cooldown"],
                ability2_id: god["AbilityId2"],
                ability2_type: god["Ability_2"]["Description"]["itemDescription"]["menuitems"][0]["value"],
                ability2_image: god["godAbility2_URL"],
                ability3: god["Ability3"],
                ability3_description: god["Ability_3"]["Description"]["itemDescription"]["description"],
                ability3_cooldown: god["Ability_3"]["Description"]["itemDescription"]["cooldown"],
                ability3_id: god["AbilityId3"],
                ability3_type: god["Ability_3"]["Description"]["itemDescription"]["menuitems"][0]["value"],
                ability3_image: god["godAbility3_URL"],
                ability4: god["Ability4"],
                ability4_description: god["Ability_4"]["Description"]["itemDescription"]["description"],
                ability4_cooldown: god["Ability_4"]["Description"]["itemDescription"]["cooldown"],
                ability4_id: god["AbilityId4"],
                ability4_type: god["Ability_4"]["Description"]["itemDescription"]["menuitems"][0]["value"],
                ability4_image: god["godAbility4_URL"]
            }
        array.push(hash)
        end
        return array[90..110]
    end

end

# smite_api.get_player(["Fallstand", 10])
# player id is 702429765
#<HTTParty::Response:0x7fb437f3ed08 parsed_response=[{"ActivePlayerId"=>702429765, "Avatar_URL"=>"", "Created_Datetime"=>"2/21/2016 10:20:18 PM", "HoursPlayed"=>1271, "Id"=>702429765, "Last_Login_Datetime"=>"5/27/2020 1:51:04 AM", "Leaves"=>37, "Level"=>128, "Losses"=>1732, "MasteryLevel"=>100, "MergedPlayers"=>[{"merge_datetime"=>"Feb 12 2019 10:27PM", "playerId"=>"11578689", "portalId"=>"1"}], "MinutesPlayed"=>76261, "Name"=>"[CSUAL]Fallstand", "Personal_Status_Message"=>"", "Platform"=>"XboxLive", "Rank_Stat_Conquest"=>1550.625, "Rank_Stat_Conquest_Controller"=>1394.80884, "Rank_Stat_Duel"=>0, "Rank_Stat_Duel_Controller"=>0, "Rank_Stat_Joust"=>1408.59375, "Rank_Stat_Joust_Controller"=>1353.51221, "RankedConquest"=>{"Leaves"=>0, "Losses"=>0, "Name"=>"League", "Points"=>0, "PrevRank"=>0, "Rank"=>0, "Rank_Stat"=>1550.625, "Rank_Variance"=>53, "Season"=>0, "Tier"=>0, "Trend"=>0, "Wins"=>0, "player_id"=>nil, "ret_msg"=>nil}, "RankedConquestController"=>{"Leaves"=>0, "Losses"=>0, "Name"=>"League Controller", "Points"=>0, "PrevRank"=>0, "Rank"=>0, "Rank_Stat"=>1394.80884, "Rank_Variance"=>53, "Season"=>7, "Tier"=>7, "Trend"=>0, "Wins"=>0, "player_id"=>nil, "ret_msg"=>nil}, "RankedDuel"=>{"Leaves"=>0, "Losses"=>0, "Name"=>"Duel", "Points"=>0, "PrevRank"=>0, "Rank"=>0, "Rank_Stat"=>0, "Rank_Variance"=>5, "Season"=>0, "Tier"=>0, "Trend"=>0, "Wins"=>0, "player_id"=>nil, "ret_msg"=>nil}, "RankedDuelController"=>{"Leaves"=>0, "Losses"=>0, "Name"=>"Duel Controller", "Points"=>0, "PrevRank"=>0, "Rank"=>0, "Rank_Stat"=>0, "Rank_Variance"=>5, "Season"=>0, "Tier"=>0, "Trend"=>0, "Wins"=>0, "player_id"=>nil, "ret_msg"=>nil}, "RankedJoust"=>{"Leaves"=>0, "Losses"=>0, "Name"=>"Joust", "Points"=>0, "PrevRank"=>0, "Rank"=>0, "Rank_Stat"=>1408.59375, "Rank_Variance"=>53, "Season"=>0, "Tier"=>0, "Trend"=>0, "Wins"=>0, "player_id"=>nil, "ret_msg"=>nil}, "RankedJoustController"=>{"Leaves"=>0, "Losses"=>6, "Name"=>"Joust Controller", "Points"=>93, "PrevRank"=>95, "Rank"=>95, "Rank_Stat"=>1353.51221, "Rank_Variance"=>9, "Season"=>7, "Tier"=>7, "Trend"=>0, "Wins"=>7, "player_id"=>nil, "ret_msg"=>nil}, "Region"=>"North America", "TeamId"=>700088746, "Team_Name"=>"Casual AF_XB", "Tier_Conquest"=>0, "Tier_Duel"=>0, "Tier_Joust"=>0, "Total_Achievements"=>128, "Total_Worshippers"=>36865, "Wins"=>1776, "hz_gamer_tag"=>"Fallstand", "hz_player_name"=>"Fallstand1", "ret_msg"=>nil}], @response=#<Net::HTTPOK 200 OK readbody=true>, @headers={"date"=>["Thu, 04 Jun 2020 17:34:53 GMT"], "server"=>["Microsoft-IIS/10.0"], "x-frame-options"=>["SAMEORIGIN"], "cache-control"=>["private"], "content-type"=>["application/json; charset=utf-8"], "x-aspnet-version"=>["4.0.30319"], "x-powered-by"=>["ASP.NET"], "content-length"=>["2109"], "set-cookie"=>["ASP.NET_SessionId=l2a0cgdguri2h5wnzsrh45kw; path=/; HttpOnly"], "connection"=>["close"]}> 

# [
#     {
#       "ActivePlayerId": 702429765,
#       "Avatar_URL": "",
#       "Created_Datetime": "2/21/2016 10:20:18 PM",
#       "HoursPlayed": 1271,
#       "Id": 702429765,
#       "Last_Login_Datetime": "5/27/2020 1:51:04 AM",
#       "Leaves": 37,
#       "Level": 128,
#       "Losses": 1732,
#       "MasteryLevel": 100,
#       "MergedPlayers": [
#         {
#           "merge_datetime": "Feb 12 2019 10:27PM",
#           "playerId": "11578689",
#           "portalId": "1"
#         }
#       ],
#       "MinutesPlayed": 76261,
#       "Name": "[CSUAL]Fallstand",
#       "Personal_Status_Message": "",
#       "Platform": "XboxLive",
#       "Rank_Stat_Conquest": 1550.625,
#       "Rank_Stat_Conquest_Controller": 1394.80884,
#       "Rank_Stat_Duel": 0,
#       "Rank_Stat_Duel_Controller": 0,
#       "Rank_Stat_Joust": 1408.59375,
#       "Rank_Stat_Joust_Controller": 1353.51221,
#       "RankedConquest": {
#         "Leaves": 0,
#         "Losses": 0,
#         "Name": "League",
#         "Points": 0,
#         "PrevRank": 0,
#         "Rank": 0,
#         "Rank_Stat": 1550.625,
#         "Rank_Variance": 53,
#         "Season": 0,
#         "Tier": 0,
#         "Trend": 0,
#         "Wins": 0,
#         "player_id": null,
#         "ret_msg": null
#       },
#       "RankedConquestController": {
#         "Leaves": 0,
#         "Losses": 0,
#         "Name": "League Controller",
#         "Points": 0,
#         "PrevRank": 0,
#         "Rank": 0,
#         "Rank_Stat": 1394.80884,
#         "Rank_Variance": 53,
#         "Season": 7,
#         "Tier": 7,
#         "Trend": 0,
#         "Wins": 0,
#         "player_id": null,
#         "ret_msg": null
#       },
#       "RankedDuel": {
#         "Leaves": 0,
#         "Losses": 0,
#         "Name": "Duel",
#         "Points": 0,
#         "PrevRank": 0,
#         "Rank": 0,
#         "Rank_Stat": 0,
#         "Rank_Variance": 5,
#         "Season": 0,
#         "Tier": 0,
#         "Trend": 0,
#         "Wins": 0,
#         "player_id": null,
#         "ret_msg": null
#       },
#       "RankedDuelController": {
#         "Leaves": 0,
#         "Losses": 0,
#         "Name": "Duel Controller",
#         "Points": 0,
#         "PrevRank": 0,
#         "Rank": 0,
#         "Rank_Stat": 0,
#         "Rank_Variance": 5,
#         "Season": 0,
#         "Tier": 0,
#         "Trend": 0,
#         "Wins": 0,
#         "player_id": null,
#         "ret_msg": null
#       },
#       "RankedJoust": {
#         "Leaves": 0,
#         "Losses": 0,
#         "Name": "Joust",
#         "Points": 0,
#         "PrevRank": 0,
#         "Rank": 0,
#         "Rank_Stat": 1408.59375,
#         "Rank_Variance": 53,
#         "Season": 0,
#         "Tier": 0,
#         "Trend": 0,
#         "Wins": 0,
#         "player_id": null,
#         "ret_msg": null
#       },
#       "RankedJoustController": {
#         "Leaves": 0,
#         "Losses": 6,
#         "Name": "Joust Controller",
#         "Points": 93,
#         "PrevRank": 96,
#         "Rank": 96,
#         "Rank_Stat": 1353.51221,
#         "Rank_Variance": 9,
#         "Season": 7,
#         "Tier": 7,
#         "Trend": 0,
#         "Wins": 7,
#         "player_id": null,
#         "ret_msg": null
#       },
#       "Region": "North America",
#       "TeamId": 700088746,
#       "Team_Name": "Casual AF_XB",
#       "Tier_Conquest": 0,
#       "Tier_Duel": 0,
#       "Tier_Joust": 0,
#       "Total_Achievements": 128,
#       "Total_Worshippers": 36865,
#       "Wins": 1776,
#       "hz_gamer_tag": "Fallstand",
#       "hz_player_name": "Fallstand1",
#       "ret_msg": null
#     }
#   ]