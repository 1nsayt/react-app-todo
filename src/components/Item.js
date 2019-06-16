import React,{Component} from 'react'

export default class Item extends Component{
    render(){
        const {title,onRemove} = this.props;
        return (
            <li className="todo">
                <button onClick={onRemove} className="btn-todo">X</button>
                <span>{title}</span>
            </li>
        )
    }
}