import { Route, Routes } from 'react-router-dom'
import { Categories } from '../pages/Categories'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { ProductPage } from '../pages/ProductPage'

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/produto/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}
