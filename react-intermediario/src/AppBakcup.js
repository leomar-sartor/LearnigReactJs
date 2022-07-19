// //Funções - Mais utilizada

// //import logo from './logo.svg';
// import { useState } from 'react';
// //import './App.css';
// import Header from './Header';
// import Main from './Main';

// function App(props) {

//   const [name, setName] = useState('Leomar');
//   const [age, setAge] = useState(29);

//   //Função anônima
//   const onClick = () => {
//     alert('Olá Mundo!')
//   };

//   return (
//     <div className="App">
//      {/* <h1>Olá Mundo React</h1>
//      <button type='button' onClick={onClick}> Clique para Olá Mundo</button> */}

//       <Header name={name} />
//       <Main />

//       {name}
//       {age}
//     </div>
//   );
// }
//export default App;

//Classes

// import React, { useState } from "react"
// import Header from './Header';
// import Main from './Main';

// export default class App extends React.Component {
//   constructor(props){
//     super (props)

//     this.state = {
//       name: 'Leomar',
//       age: 29
//     }
//   }

//   render(){
//     return (
//      <div className="App">
//       <Header name={this.state.name} />
//       <Main />
//     </div>
//     )
//   }
// }
