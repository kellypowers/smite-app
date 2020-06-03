class Player < ApplicationRecord
has_many :games, through: :player_games

end