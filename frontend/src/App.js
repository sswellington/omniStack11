// JSX (JavaScript XML)

import React, { useState } from 'react';

import Header from './Header';

function App() {

  // Array [valor, funcaoDeAtualizacao]
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }

  return (
    <div>
      <Header> Contador: {counter} </Header>
      <button onClick={increment} >Incrementar</button>
    </div>
  );
}

export default App;