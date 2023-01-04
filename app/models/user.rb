class User < ApplicationRecord
   has_secure_password 
   
   has_many :forums
   has_many :posts, through: :forums
   has_many :likes, through: :posts

   validates :username, presence: true, uniqueness: true
   validates :email, presence: true, uniqueness: true
end
