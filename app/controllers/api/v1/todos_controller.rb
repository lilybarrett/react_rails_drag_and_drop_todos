class Api::V1::TodosController < Api::V1::BaseController

  def index
    respond_with Todo.all
  end

  def create
    todo = Todo.create(todo_params)
    render json: { name: todo.name, id: todo.id, description: todo.description }.to_json
  end

  def destroy
    respond_with Todo.destroy(params[:id])
  end

  private

  def todo_params
    params.require(:todo).permit(:id, :name, :description)
  end
end
