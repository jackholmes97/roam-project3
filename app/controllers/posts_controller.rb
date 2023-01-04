class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Post.all 
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end
end
