import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';

const Todo = (props) => {
  return(
    <div className="todo-div small-12 small-centered columns text-center">
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Todo;
