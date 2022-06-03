import React, { Component } from "react";

class Botao extends Component {
  render() {
    const valor = "Clique aqui";
    return <button value={valor}> {valor}</button>;
  }
}

export default Botao;
