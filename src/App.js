import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';


function App() {

  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  const disminuir = () => {
    setContador(contador - 1)
  }

  let date = Date()

  return (
    <>

      <div >
        <BasicExample />
        <ItemListContainer greeting={"Hola mundo"} />
      </div>

      <h2>{contador !== 0 && date}  </h2>
      <p> {contador}</p>
      <button onClick={incrementar}> Incrementar </button>
      <button onClick={disminuir}> Disminuir </button>

    </>

  );
}

export default App;
