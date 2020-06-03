class User < ApplicationRecord
    #has secure password is validation for password, if double validate run into problems
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
    has_many :players, through: :user_players
    # user can favorite players to view on their home page

    
    
    before_save { |user| user.email = email.downcase }



end

