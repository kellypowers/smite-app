class GodBuildsController < ApplicationController 
# build is a reserved keyword, maybe ill use god_builds? not sure
    def index 
        @god_builds = @god.god_builds
        puts "params are #{params}, builds are #{@god_builds}"
        render json: @god_builds, status: 200
    end

    def show
        puts "params are #{params}"
        @god = God.find(params[:god_id])
        @god_build = GodBuild.find_by(id: params[:id])

        # render json: @build.to_json(:include => {:god => {:only => [:god_id, :god_name]} })

    end

    def create

        god = God.find_by(id: params[:god_id])
        puts "god is #{god}"
        @god_build = god.god_builds.build(god_build_params)
        if @build.save 
            puts "build is #{@build}"
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
        params.require(:god_build).permit(:name, :item1, :item2, :item3, :item4, :item5, :item6, :description)
    end

    def set_god!
        @god = God.find(params[:god_id])
    end


end