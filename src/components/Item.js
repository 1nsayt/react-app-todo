import React,{Component} from 'react'

export default class Item extends Component{
    render(){
        const {title,onRemove,id} = this.props;
        return (
            <li>
                <button onClick={()=>onRemove(id)}>X</button>
                <h1>{title}</h1>
            </li>
        )
    }
}