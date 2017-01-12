import React from 'react';
import Todo from './Todo';
import { Draggable, Droppable } from 'react-drag-and-drop';

const TodoList = (props) => {
  let todos = props.todos.map(todo => {
    const { id, name, description } = todo;

    return(
      <Draggable type="todo" data={id} key={id}>
        <Todo
          name={name}
          description={description}
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
