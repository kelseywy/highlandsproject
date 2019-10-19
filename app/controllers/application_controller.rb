class ApplicationController < ActionController::Base
  before_action :force_json, only: :search

  def index; end

  def search
    @products = Product.ransack(title_cont: params[:q]).result(distinct: true).limit(6)
  end

  private

  def force_json
    request.format = :json
  end
end
