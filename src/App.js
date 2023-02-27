import 'bootstrap/dist/css/bootstrap.min.css';

import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState, useEffect } from 'react';
import Counter from './components/Counter/Counter';


function App() {



  return (
    <>

      <div >
        <BasicExample />
        <ItemListContainer />
        <Counter />

      </div>



    </>

  );
}

export default App;
