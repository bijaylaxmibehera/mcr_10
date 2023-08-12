import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './component/Navbar'
import { Products } from './pages/Products'
import { Department } from './pages/Department'
import { ProductDetails } from './pages/ProductDetails'
import { AddnewProduct } from './pages/AddNewProduct'

function App () {
  return (
    <div className='App flex'>
      <div className='w-[20vw]'>
        <NavBar />
      </div>
      <div className='w-[80vw]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails/>} />
          <Route path='/departments' element={<Department />} />
          <Route path='/addproduct' element={<AddnewProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
