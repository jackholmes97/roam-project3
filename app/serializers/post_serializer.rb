class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :forum, :user

  belongs_to :user
  belongs_to :forum
end
