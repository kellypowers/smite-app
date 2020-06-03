class Game < ApplicationRecord
has_many :players, through: :player_games

end