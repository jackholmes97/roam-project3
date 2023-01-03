class ForumSerializer < ActiveModel::Serializer
  attributes :id, :topic, :num_of_members
end
