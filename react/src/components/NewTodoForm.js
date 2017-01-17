import React from 'react';

const NewTodoForm = (props) => {
  return (
    <div className="row form">
      <div className="small-6 small-centered columns text-center">
        <form onSubmit={props.addItem}>
          <div className="fields">
            <input type="text" placeholder="Todo Title" onChange={props.setNewName} />
            <input type="text" placeholder="Todo Description" onChange={props.setNewDescription} />
            <div>
               <button type="submit" className="medium button">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default NewTodoForm;
