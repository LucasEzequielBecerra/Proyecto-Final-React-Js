import 'bootstrap/dist/css/bootstrap.min.css';

import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { arrProductos } from './components/ItemListContainer/ItemList';


function App() {



  return (
    <>

      <div >
        <BasicExample />
        <ItemListContainer />
        <ItemDetailContainer Prod={arrProductos} />

      </div>



    </>

  );
}

export default App;
