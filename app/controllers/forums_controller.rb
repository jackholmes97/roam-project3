class ForumsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        render json: Forum.all
    end


    def create
        new_forum = Forum.create!(forum_params)
        render json: new_forum, status: :created
    end

    private

    def forum_params
        params.permit(:topic, :subject)
    end
end
