class GodBuildSerializer 
    def initialize(god_build_object)
        @god_build = god_build_object
        @god = @god.god_builds
    end

    def to_serialized_json
        # puts "build is #{@build}"
        options = {
            include: {
                @god_build
                }
            # only: [:player_name, :id],
            #     include: {
            #     @character
            #     }
        }
        @god_build.to_json(options)
    end
end