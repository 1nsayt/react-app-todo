import React,{Component} from 'react'

export default class AddTodoFrom extends Component {
    constructor(props){
        super(props)
        this._title = React.createRef();
        this.submit = this.submit.bind(this);
    }

    submit(e){
        const {_title} = this;
        e.preventDefault();
        this.props.newTodo(_title.current.value);
        _title.current.value = "";
        _title.current.focus()
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <input 
                    ref={this._title} 
                    type="text"
                    placeholder="what to do..." />
                <button>Add</button>
            </form> 
        )
    }
}