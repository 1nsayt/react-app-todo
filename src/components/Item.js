import React,{Component} from 'react'

export default class Items extends Component{
    render(){
        const {title} = this.props;
        return (
            <li>
                <button>X</button>
                <h1>{title}</h1>
            </li>
        )
    }
}