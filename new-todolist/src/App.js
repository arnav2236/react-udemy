import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from "./AddTodo.js"

//remember 3 step
// create component
// import it
// add it to render 


class App extends Component {

  state = {

    todos:
     [
      {text: "Buy MIlk"},
      {text: "Buy Egg"}
    ]
  };

  addTodoToState = text =>{
    const newTodos=this.state.todos.concat({text:text});
    this.setState({
      todos: newTodos
    });
  };

  render() {

    return (
      <div className="App">
        { this.state.todos.map((todo, index) => { return <li key={index}> {todo.text}</li>; })}
        <AddTodo addTodoToState={this.addTodoToState}/>
      </div> 
    );
      
  }

}

export default App;
