class ForumsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        render json: Forum.all
    end
end
