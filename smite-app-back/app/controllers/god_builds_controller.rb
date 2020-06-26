require 'pry'
class GodBuildsController < ApplicationController 
# build is a reserved keyword, maybe ill use god_builds? not sure
    def index 
        @god_builds = GodBuild.all
        puts "params are #{params}, builds are #{@god_builds}"
        render json: @god_builds, status: 200
    end

    def show
        puts "params are #{params}"
        @god = God.find_by(god_id: params[:god_id])
        @god_build = GodBuild.find_by(id: params[:id])
        render json: @god_build 
        # render json: @build.to_json(:include => {:god => {:only => [:god_id, :god_name]} })

    end

    def create
        # binding.pry
        puts "params are #{god_build_params}"
        god = God.find_by(god_id: (params["build"]["god_id_smite"]))
        # puts "god id to i is #{god.id}"
        puts "params are #{params}"
        puts "params name is #{params["build"]["items"][0]["name"]}"
        puts "god is #{god.id}"
        #  god_build = god.god_builds.build(name: params["build"]["name"], god_id_smite: params['build']["god_id_smite"], description: params["build"]["description"], item1: params["build"]["item1"], item2: params["build"]["item2"], item3: params["build"]["item3"], item4: params["build"]["item4"], item5: params["build"]["item5"], item6: params["build"]["item6"]) 
         god_build = GodBuild.new(name: params["build"]["name"], god_id: god.id, god_id_smite: params['build']["god_id_smite"], description: params["build"]["description"], item1: params["build"]["items"][0]["name"], item2: params["build"]["items"][1]["name"], item3: params["build"]["items"][2]["name"], item4: params["build"]["items"][3]["name"], item5: params["build"]["items"][4]["name"], item6: params["build"]["items"][5]["name"]) 
        puts "god build is #{god_build}"
        # binding.pry
        if god_build.save 
            puts "godbuild is #{god_build}"
            build = GodBuild.find_by(id: god_build.id)
            puts " build id #{build}"
            # render json: GodBuildSerializer.new(build).to_serialized_json
            render json: god_build.to_json, status: 200
            # @god_builds = GodBuild.all
            # render json: @god_builds
        else
            puts "unsuccessful"
            render plain: "unsuccessful"
        end
    end
    
    def update 
        puts "params are #{params}"
        god = God.find_by(id: params[:god_id])
        god_build = GodBuild.find_by(id: params[:id])
        puts "build is #{build}  build params is #{god_build_params}"
        if GodBuild.update(god_build_params)
            # render json: build.to_json(:include => {:god => {:only => [:god_id, :god_name]} })
            render json: {message: "test"}
            puts "updated successfully"
        else
            puts "not updated"
            render json: {error: build.update(god_build_params).errors}
        end
    end

    def destroy
        puts "params are #{params}"
        god_build = GodBuild.find(params[:id])
        god_build.delete
        @god_builds = GodBuild.all
        render json: @god_builds
    end

    private
    def god_build_params 
        params.require(:build).permit(:name, :god_id_smite, :selector, :description, :redirect, items: [:id, :name, :item_id, :item_stat, :item_tier, :price, :short_description, :item_image, :item_secondary_description, :active_flag]) # :item2, :item3, :item4, :item5, :item6, :description)
    end

    def set_god!
        @god = God.find(params[:god_id])
    end


end