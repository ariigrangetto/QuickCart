import { Routes, Route} from 'react-router-dom'
import useFilter from './hooks/useFilters'
import {products as initialProducts} from "./mocks/db.json"
import { Cart } from './components/Cart'
import Products from './Pages/Products'
import Home from './Pages/Home'
import { CartProvider } from './context/cartContext'

function App() {
  const {filterProducts} = useFilter();

  //pasando los productos ya filtrados
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productsPage' element={
        <>
        <CartProvider>
          <Cart/>
          <Products products={filteredProducts}/>
        </CartProvider>
        
        </>}/>
    </Routes>
    </>
  )
}

export default App
