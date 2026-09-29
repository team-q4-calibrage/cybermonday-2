import { BrowserRouter, Routes, Route } from 'react-router'
import { CartProvider } from './context/CartContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Header from './components/Header.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Confirmation from './pages/Confirmation.jsx'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnnouncementBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <CartDrawer />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}
