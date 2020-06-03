class User < ApplicationRecord
    #has secure password is validation for password, if double validate run into problems
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true

    
    
    before_save { |user| user.email = email.downcase }



end

