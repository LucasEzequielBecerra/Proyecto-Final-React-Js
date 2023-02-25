import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState, useEffect } from 'react';
import Counter from './components/Counter/Counter';


function App() {
  const productos = { id: 0, nombre: "monitor", precio: 80.000 }


  return (
    <>

      <div className='container' >
        <BasicExample />
        <ItemListContainer productos={productos} />
        <Counter />

      </div>



    </>

  );
}

export default App;
