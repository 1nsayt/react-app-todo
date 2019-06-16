import React,{Component} from 'react'
import Item from './Item'

export default class TodoList extends Component{

    render(){
        const {todoList,onRemove} = this.props;
        return (
            <ul className="todoList">
                
                {
                    (todoList.length === 0)?<p>There's empty list...</p>:
                    todoList.map((item)=> <Item key={item.id} title={item.title} id={item.id} onRemove={()=>onRemove(item.id)}/>)}
            </ul>
        )
    }

}
