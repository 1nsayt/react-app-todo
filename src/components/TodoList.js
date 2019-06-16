import React,{Component} from 'react'
import Item from './Item'

export default class TodoList extends Component{

    render(){
        const {todoList,onRemove} = this.props;
        return (
            <div>
                {todoList.map((item)=> <Item key={item.id} title={item.title} id={item.id} onRemove={onRemove}/>)}
            </div>
        )
    }

}