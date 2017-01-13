import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import { Draggable, Droppable } from 'react-drag-and-drop';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }

    this.onDrop = this.onDrop.bind(this);
    this.removeTodoFromClient = this.removeTodoFromClient.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  onDrop(data) {
    console.log(data);
    let idFromData = parseInt(data.todo);
    fetch(`http://localhost:3000/api/v1/todos/${idFromData}`, {
      method: 'DELETE'
    }).then(response => {
      if (response.ok) {
        console.log("successfully removed todo from database");
        this.removeTodoFromClient(idFromData);
      }
    });
  };

  removeTodoFromClient(id) {
    let newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
    console.log("successfully removed todo from client");
  };

  addItem(){
    debugger;
    // let name = this.refs.name.value;
    // let description = this.refs.description.value;
    // console.log('The name value is ' + name + 'the description value is ' + description);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/todos.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({todos: body});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let onDrop = (data) => this.onDrop(data);
    let addItem = () => this.addItem();
    return(
      <div>
        <div>
          <TodoList
            todos={this.state.todos}
            onDrop={onDrop}
          />
        </div>
        <Droppable
          types={['todo']}
          onDrop={onDrop}>
          <div className="row">
            <div className="small-6 small-centered columns text-center completed">
              <h3>Done? Drag and Drop Below</h3>
              <img src="https://images.pexels.com/photos/282909/pexels-photo-282909.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
            </div>
          </div>
        </Droppable>
        <div className="row">
          <div>
            <NewTodoForm
              addItem={addItem}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
