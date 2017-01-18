import React from 'react';
import Todo from './Todo';
import { Draggable, Droppable } from 'react-drag-and-drop';

const TodoList = (props) => {
  let todos = props.todos.map(todo => {

    return(
      <Draggable type="todo" data={todo.id} key={todo.id}>
        <Todo
          key={todo.id}
          name={todo.name}
          description={todo.description}
        />
      </Draggable>
    )
  })

  return(
    <div className="small-6 small-centered columns">
      {todos}
    </div>
  )
}

export default TodoList;
