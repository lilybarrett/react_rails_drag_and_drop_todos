class Api::V1::TodosController < Api::V1::BaseController
  def index
    respond_with Todo.all
  end

  def create
    respond_with :api, :v1, Todo.create(todo_params)
  end

  def destroy
    respond_with Todo.destroy(params[:id])
  end

  private

  def todo_params
    params.permit(:id, :name, :description)
  end
end
