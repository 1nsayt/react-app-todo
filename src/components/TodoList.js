import React,{Component} from 'react'
import Item from './Item'

export default class TodoList extends Component{

    render(){
        const {todoList} = this.props;
        return (
            <div>
                {todoList.map((item)=> <Item title={item.title}/>)}
            </div>
        )
    }

}