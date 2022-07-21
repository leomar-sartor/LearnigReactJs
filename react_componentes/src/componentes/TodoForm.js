import React, {Component} from 'react';

export default class TodoForm extends Component {
    constructor(props){
        super(props);

        console.log(`TodoForma.js PROPS: ${props}`);

        this.state = {
            todo: ''
        }
    }

    onAdd = (event) => {
        event.preventDefault();
        const { todo } = this.state;
        if (todo){
            this.props.pushToItems(this.state.todo);

            this.setState({
                todo: ''
            });
        }
    }

    onChange = (event) => {
        this.setState({
          todo: event.target.value
        });
      }

    render(){

        const { todo } = this.state;

        return (
            <div>
                <div className="form-group">
                    <input type="text" value={todo} name="todo" className="form-control" placeholder="Coloque seu nome" onChange={this.onChange}></input>
                </div>
                <div className="form-group">
                    <button type="button" onClick={this.onAdd} className="btn btn-success"> Novo </button>
                </div>
            </div>
        );
    }
}