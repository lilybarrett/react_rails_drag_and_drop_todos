class Api::V1::BaseController < ApplicationController
  respond_to :json
  protect_from_forgery with: :null_session
end
