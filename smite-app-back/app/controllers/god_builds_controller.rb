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
        god = God.find_by(god_id: (params["build"]["god_id_smite"]).to_i)
        puts "god id to i is #{params["god_id"].to_i}"
        puts "params are #{params}"
        puts "params name is #{params["name"]}"
        puts "god is #{god}"
        @god_build = god.god_builds.build(god_build_params)
        puts "god build is #{@god_build}"
        # binding.pry
        if @god_build.save 
            puts "build is #{@god_build}"
            render json: @god_build, status: 200
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

        render json: {god_build_id: god_build.id}
    end

    private
    def god_build_params 
        params.require(:build).permit(:name, :god_id_smite, :item1, :item2, :item3, :item4, :item5, :item6, :description)
    end

    def set_god!
        @god = God.find(params[:god_id])
    end


end