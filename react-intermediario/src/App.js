import React, { useState, useRef } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

function App(props) {

  //const inputRef = useRef(null);

  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const onChange = (e) => {

    //inputRef.current.classList.toggle('MINHA_CLASSE_CUSTOMIZADA');

    setValues({...values, [e.target.name]: e.target.value})
  };

  return (
    <div className="container">
      <Header />
      <Sidebar />
        <Main>
          <h1> CONTAINER </h1>

          <p> {JSON.stringify(values)}</p>

          <form>
            <input type="text" name="name" onChange={onChange} />
            <input type="email" name="email" onChange={onChange} />
            <button type="submit"> Submit </button> 
          </form>

        </Main>
    </div>
  );
}

export default App;