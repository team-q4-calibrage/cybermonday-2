import { Link } from 'react-router'
import { useCart } from '../context/cart.js'
import { brand } from '../data/products.js'

export default function Header() {
  const { count, openDrawer } = useCart()

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">{brand}</Link>
        <nav className="header__nav" aria-label="Navigation principale">
          <Link to="/shop">Boutique</Link>
          <Link to="/shop?cat=Audio">Audio</Link>
          <Link to="/shop?cat=Bureau">Bureau</Link>
        </nav>
        <button type="button" className="cart-btn" onClick={openDrawer} aria-label={`Panier, ${count} article(s)`}>
          Panier
          <span className="cart-btn__count">{count}</span>
        </button>
      </div>
    </header>
  )
}
