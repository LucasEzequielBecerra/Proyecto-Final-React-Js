import 'bootstrap/dist/css/bootstrap.min.css';

import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { arrProductos } from './products/Products';
import NotFound from './pages/NotFound';


function App() {



  return (
    <>

      <div >
        <BrowserRouter>
          <BasicExample />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/product/:idProduct' element={<ItemDetailContainer />} />



            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
