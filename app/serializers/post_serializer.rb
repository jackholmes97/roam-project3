class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :forum_id
end
