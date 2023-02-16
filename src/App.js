import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState, useEffect } from 'react';
import Counter from './components/Counter/Counter';


function App() {



  return (
    <>

      <div className='container' >
        <BasicExample />
        <ItemListContainer greeting={"Hola mundo"} />
        <Counter />

      </div>



    </>

  );
}

export default App;
