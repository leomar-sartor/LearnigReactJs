import React, { Component } from 'react';
import TodoForm from '../componentes/TodoForm';
import { TodoList } from '../componentes/TodoList';
import { ContainerApp } from '../componentes/ContainerApp';

export default class TodoListApp extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    pushToItems = (todo) => {
        const { items } = this.state;

        this.setState({
            items: [...items, todo]
        });
    }

    removeFromItems = (index) => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({
            items
        });
    }

    render(){
        const { items } = this.state;

        return (
            <ContainerApp>
                <div className='col-xs-12 col-md-12'>
                    <h2>Lista de Tarefas</h2>
                </div>
                <div className='col-xs-12 col-md-12'>
                    <TodoForm pushToItems={this.pushToItems}/>
                </div>
                <hr/>
                <div className='col-xs-12 col-md-12'>
                    <TodoList items={items} removeFromItems={this.removeFromItems}/>
                </div>
            </ContainerApp>
        );
    }
}