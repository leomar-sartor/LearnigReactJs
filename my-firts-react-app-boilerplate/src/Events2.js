import React, {Component} from 'react';

export default class Events2 extends Component{
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            idade: '',
            dados: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        //console.log(this.state);
    }

    insertToData = () => {
        const arr = this.state.dados;
        arr.push(this.state.nome);

        this.setState({
            nome: '',
            dados: arr
        })

        //this.state.dados.push(this.state.nome);
        console.log(this.state);
    }

    render(){

        const {dados} = this.state;

        return (
            <div>
                <input type="text" onChange={this.handleChange} name="nome" id="nome" placeholder='Digite seu nome...'/>
                {/* <input type="text" onChange={this.handleChange} name="idade" id="idade" placeholder='Digite sua idadee...'/> */}
                <button type='button' onClick={this.insertToData}> OK </button> 

                <ul>
                {
                    dados.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

