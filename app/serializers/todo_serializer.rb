class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :description 
end
