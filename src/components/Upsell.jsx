import SmartImage from './SmartImage.jsx'
import { useCart } from '../context/cart.js'
import { imageFor, products } from '../data/products.js'
import { formatPrice } from '../utils/format.js'

// Suggests the best-selling product that isn't in the cart yet.
export default function Upsell() {
  const { items, addItem } = useCart()
  const suggestion = products.find((p) => p.bestSeller && !items.some((i) => i.id === p.id))
  if (!suggestion) return null

  return (
    <div className="upsell">
      <SmartImage src={imageFor(suggestion.id)} alt={suggestion.name} ratio="1 / 1" className="upsell__img" />
      <div className="upsell__text">
        <p className="upsell__label">Souvent acheté avec</p>
        <p className="upsell__name">{suggestion.name}</p>
        <p className="muted">{formatPrice(suggestion.price)}</p>
      </div>
      <button type="button" className="btn btn--ghost btn--small" onClick={() => addItem(suggestion, 1, { openDrawer: false })}>
        + Ajouter
      </button>
    </div>
  )
}
