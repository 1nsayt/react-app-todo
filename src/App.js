import React,{Component} from 'react';
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import { v4 } from 'uuid'


export default class App extends Component{
    constructor(props){
      super(props)
      this.state={
        todoList: []
      }
      this.addTodo=this.addTodo.bind(this);
      this.removeTodo=this.removeTodo.bind(this);
    }
    addTodo(title){
      const todoList= [
        ...this.state.todoList,
        {
          id: v4(),
          title
        }];
      this.setState({todoList})
    }
    removeTodo(id){
      const todoList = this.state.todoList.filter((todo)=>todo.id !== id);
      this.setState({todoList})
      
    }
    render(){
      const {todoList} = this.state;
        return (
          <div className="container">
            <AddTodoForm newTodo={this.addTodo}/>
            <TodoList todoList={todoList} onRemove={this.removeTodo}/>
          </div>
        )
      }
  }


