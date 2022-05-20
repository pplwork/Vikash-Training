import './App.css';
import { useState } from 'react'
import LOL from './class.js'
import Form from './form.js'
import Todos from './Todo'
import React, { Component } from 'react'
import AddTodo from './AddForm';


class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'buy some eggs' },
      { id: 3, content: 'buy some beer' },
    ]
  }
   
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id !== id
    })

    this.setState({
      todos:todos
    })
  }

  addTodo=(name)=>{
    name.id=Math.random()
    let todos= [...this.state.todos, name]
    this.setState({
      todos:todos
    })
  }

  render() {
    return (
    <div className="todo-app container" >
      <h1 className="content blue-text">Todos</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo}/>
    </div>
    )
  };




  // return (
  //   <div className="App">
  //     <h1>
  //       {changeTitle}
  //     </h1>
  //     <button onClick={() => setChangeTitle("new title")}>Change Title</button>
  //     <p onCopy={handleCopy}>this is paragragh</p>
  //     <LOL ninja={state.ninjas} />
  //     <Form/>
  //   </div>
  // );
}

export default App;