class ForumsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        forums = Forum.all 
        render json: forums
    end

    def show
    end
end
