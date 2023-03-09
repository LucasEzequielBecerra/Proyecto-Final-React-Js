import 'bootstrap/dist/css/bootstrap.min.css';

import BasicExample from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { CartContextProvider } from './context/cartContext';


function App() {



  return (
    <>

      <div >
        <CartContextProvider>

          <BrowserRouter>
            <BasicExample />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/product/:idProduct' element={<ItemDetailContainer />} />
              <Route path='/category/:idCategory' element={<ItemListContainer />} />


              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>

    </>
  );
}

export default App;
