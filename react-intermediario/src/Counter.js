//Funções - Mais utilizada
import { useState } from 'react';

function App(props) {

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  const onIncrement = () => {
    if ( counter == 0 ){
      return setCounter(1);
    }
    return setCounter(counter + 1);
  }

  const onDecrement = () => {
    if ( counter == 0 ){
      return setCounter(0);
    }
    return setCounter(counter - 1);
  }

  const showInput = () => {
    alert(name);
  }

  return (
    <div className="App">
      <button type='button' onClick={ onIncrement }> + </button>
      <h1> { counter } </h1>
      <button type='button' onClick={ onDecrement }> - </button>
      <input type='text' onChange={ (e) => setName(e.target.value) } placeholder="Enter your name"></input>
      <button type='button' onClick={ showInput }> Mostrar Input </button>
    </div>
  );
}

export default App;