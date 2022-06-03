import React, {
  Component
} from "react";
import Panel from './Panel';

export default class Props extends Component {
  constructor(props){
    super(props);
    const { attr, attr2, attr3 } = this.props;
    console.log(attr, attr2, attr3);
  }

  render() {
    const { attr, attr2, attr3 } = this.props;

    return ( 
      <div>
        {  attr === 'p' ? <p> Propriedades em REACT </p> : <h1>Propriedades em REACT </h1> }
        <Panel headercolor="red" bordercolor="blue" headertext="Cabeçalho" data="Propriedade em Sub Objeto"/>
      </div> 
      );
  }
}