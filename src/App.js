import React,{Component} from 'react';
import AddTodoForm from './components/AddTodoform'
import TodoList from './components/TodoList'
import { v4 } from 'uuid'


export default class App extends Component{
    constructor(props){
      super(props)
      this.state={
        todoList: []
      }
      this.addTodo=this.addTodo.bind(this);
    }
    addTodo(title){
      const todoList= [
        [...this.state.todoList],
        {
          id: v4(),
          title
        }]
      this.setState({todoList})
    }
    removeTodo(id){
      const todoList = this.state.todoList.filter((todo)=>todo.id !== id)
    }
    render(){
      const {todoList} = this.state;
        return (
          <div className="App">
          <AddTodoForm add={this.addTodo}/>
          <TodoList todoList={todoList}/>
          </div>
        )
      }
  }


