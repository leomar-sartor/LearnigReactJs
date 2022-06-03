import React, {Component} from 'react';

export default class Events extends Component{
    constructor(props){
        super(props);

        this.state = {
            clicked: 0
        }

        // Segunda Forma
        //this.clickMethod = this.clickMethod.bind(this);
    }

    // clickMethod(){
    //     console.log(`--- ${this.state.clicked} ---`);
    //     console.log("--- BEGIN ---");
    //     this.setState({
    //         clicked: this.state.clicked + 1
    //     });

    //     let self = this;
    //     setTimeout(function(){ 
    //         console.log("--- END ---");
    //         console.log(`--- ${self.state.clicked} ---`);
    //     }, 1000);
        
    // }

    //Terceira Forma - Arrow Functions
    clickMethod = () => {
        console.log(`--- ${this.state.clicked} ---`);
        console.log("--- BEGIN ---");
        this.setState({
            clicked: this.state.clicked + 1
        });

        let self = this;
        setTimeout(function(){ 
            console.log("--- END ---");
            console.log(`--- ${self.state.clicked} ---`);
        }, 1000);
        
    }

    render(){
        return (
            <div>
                {/* Primeira Forma */}
                {/* <button onClick={this.clickMethod.bind(this)} type='button'> Clique em mim</button>  */}
                <button onClick={this.clickMethod} type='button'> Clique em mim</button> 
            </div>
        )
    }
}

