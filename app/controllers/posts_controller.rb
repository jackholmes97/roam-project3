class PostsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        render json: Post.all
    end

    def create
        newPost = Post.create!(post_params)
        render json: newPost, status: :created 
    end

    private

    def post_params
        params.permit(:title, :content, :forum_id, :user_id)
    end
end
