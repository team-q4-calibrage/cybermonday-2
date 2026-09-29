import { useCart } from '../context/cart.js'
import { freeShippingFrom } from '../data/products.js'
import { formatPrice } from '../utils/format.js'

export default function FreeShippingBar() {
  const { subtotal } = useCart()
  const remaining = freeShippingFrom - subtotal
  const pct = Math.min(100, Math.round((subtotal / freeShippingFrom) * 100))

  return (
    <div className="ship">
      <p>
        {remaining > 0 ? (
          <>Plus que <strong>{formatPrice(remaining)}</strong> pour la livraison offerte</>
        ) : (
          <strong>La livraison est offerte ✓</strong>
        )}
      </p>
      <div className="ship__bar"><span style={{ width: `${pct}%` }} /></div>
    </div>
  )
}
