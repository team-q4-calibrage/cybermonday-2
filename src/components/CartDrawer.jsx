import { useEffect } from 'react'
import { Link } from 'react-router'
import CartLines from './CartLines.jsx'
import FreeShippingBar from './FreeShippingBar.jsx'
import Upsell from './Upsell.jsx'
import { useCart } from '../context/cart.js'
import { formatPrice } from '../utils/format.js'

export default function CartDrawer() {
  const { drawerOpen, closeDrawer, items, subtotal, savings } = useCart()

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e) => e.key === 'Escape' && closeDrawer()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [drawerOpen, closeDrawer])

  if (!drawerOpen) return null

  return (
    <div className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" onClick={closeDrawer}>
      <aside className="drawer__panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer__head">
          <h2 id="drawer-title">Votre panier</h2>
          <button type="button" className="icon-btn" onClick={closeDrawer} aria-label="Fermer le panier">×</button>
        </div>

        {items.length === 0 ? (
          <div className="drawer__empty">
            <p>Votre panier est vide.</p>
            <Link to="/shop" className="btn" onClick={closeDrawer}>Voir la boutique</Link>
          </div>
        ) : (
          <>
            <FreeShippingBar />
            <div className="drawer__scroll">
              <CartLines onNavigate={closeDrawer} />
              <Upsell />
            </div>
            <div className="drawer__foot">
              <div className="row"><span>Sous-total</span><strong>{formatPrice(subtotal)}</strong></div>
              <div className="row accent"><span>Vous économisez</span><span>{formatPrice(savings)}</span></div>
              <Link to="/checkout" className="btn btn--block btn--large" onClick={closeDrawer}>
                Commander
              </Link>
              <Link to="/cart" className="link-btn" onClick={closeDrawer}>Voir le panier</Link>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
