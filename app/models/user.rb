class User < ApplicationRecord
   has_secure_password 
   
   has_many :posts
   has_many :forums, through: :posts

   validates :username, presence: true, uniqueness: true
   validates :email, presence: true, uniqueness: true
end
