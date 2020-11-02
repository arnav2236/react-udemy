import React from "react"
class AddTodo extends React.Component{
    state={
        todotext : ""
    }

    changeTodotext = (event) =>{
        this.setState({
            todotext : event.target.value
        })
    }

    submitHandler = (event) =>{
        event.preventDefault();
        // prevenDeaflt jisse submit k bad brwoser reload na ho  
       this.props.addTodoToState(this.state.todotext);

       this.setState({
           todotext : ""
       })
    }

    render(){
        return <div>
            Add ToDo
            <form onSubmit={this.submitHandler} >
            <input type="text" onChange = {this.changeTodotext} value={this.state.todotext}/>
            <button type="submit">Add Todo</button>
            </form>
            
        </div>
    }
}

export default AddTodo;