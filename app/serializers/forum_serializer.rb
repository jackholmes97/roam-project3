class ForumSerializer < ActiveModel::Serializer
  attributes :id, :topic, :subject

  has_many :posts
end
