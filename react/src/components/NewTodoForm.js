import React from 'react';

const NewTodoForm = (props) => {
  return (
    <div className="row form">
      <div className="small-6 small-centered columns text-center">
        <form onSubmit={props.addItem}>
          <div className="fields">
            <input type="text" placeholder="Todo Title" value={props.name} />
            <input type="text" placeholder="Todo Description" value={props.description} />
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
