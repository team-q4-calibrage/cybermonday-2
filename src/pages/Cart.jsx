import { Link } from 'react-router'
import CartLines from '../components/CartLines.jsx'
import FreeShippingBar from '../components/FreeShippingBar.jsx'
import Upsell from '../components/Upsell.jsx'
import TrustBadges from '../components/TrustBadges.jsx'
import { useCart } from '../context/cart.js'
import { formatPrice } from '../utils/format.js'

export default function Cart() {
  const { items, subtotal, savings, shipping, total } = useCart()

  if (items.length === 0) {
    return (
      <main className="section container empty">
        <h1>Votre panier est vide</h1>
        <p className="muted">Les offres Cyber Monday vous attendent.</p>
        <Link to="/shop" className="btn btn--large">Voir la boutique</Link>
      </main>
    )
  }

  return (
    <main className="section container">
      <h1 className="page-title">Votre panier</h1>
      <div className="cart-layout">
        <div>
          <FreeShippingBar />
          <CartLines />
          <Upsell />
        </div>
        <aside className="summary-card" aria-label="Récapitulatif">
          <div className="row"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div>
          <div className="row"><span>Livraison</span><span>{shipping ? formatPrice(shipping) : 'Offerte'}</span></div>
          <div className="row accent"><span>Vous économisez</span><span>{formatPrice(savings)}</span></div>
          <div className="row row--total"><span>Total</span><span>{formatPrice(total)}</span></div>
          <Link to="/checkout" className="btn btn--large btn--block">Passer la commande</Link>
          <TrustBadges compact />
        </aside>
      </div>
    </main>
  )
}
