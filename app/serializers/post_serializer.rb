class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :forum_id, :user

  belongs_to :user
end
