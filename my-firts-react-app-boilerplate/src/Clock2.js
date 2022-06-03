import React, {
  Component
} from "react";

export default class Clock2 extends Component {

  constructor(props){
    super(props);

    this.state = {
      time: new Date().toLocaleString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      })
    }
  }

  componentDidMount(){
    this.timer = setInterval( () => this.updateClock(), 1000);
  }
  
  componentWillUnmount(){
    clearInterval(this.timer);
  }

  updateClock(){
    this.setState({
      time: new Date().toLocaleString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      })
    });
  }

  render() {
    const {time} = this.state;

      return (
       <h1> { time } </h1>
       );
    }
}