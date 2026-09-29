import { Link } from 'react-router'
import SmartImage from './SmartImage.jsx'
import QtyControl from './QtyControl.jsx'
import { useCart } from '../context/cart.js'
import { imageFor } from '../data/products.js'
import { formatPrice } from '../utils/format.js'

export default function CartLines({ onNavigate }) {
  const { items, updateQty, removeItem } = useCart()

  return (
    <ul className="lines">
      {items.map((item) => (
        <li key={item.id} className="line">
          <Link to={`/product/${item.id}`} onClick={onNavigate}>
            <SmartImage src={imageFor(item.id)} alt={item.name} ratio="1 / 1" className="line__img" />
          </Link>
          <div className="line__body">
            <Link to={`/product/${item.id}`} className="line__name" onClick={onNavigate}>{item.name}</Link>
            <p className="line__price">
              {formatPrice(item.price)} <s>{formatPrice(item.oldPrice)}</s>
            </p>
            <div className="line__actions">
              <QtyControl value={item.qty} onChange={(q) => updateQty(item.id, q)} label={`Quantité pour ${item.name}`} />
              <button type="button" className="link-btn" onClick={() => removeItem(item.id)}>Retirer</button>
            </div>
          </div>
          <p className="line__total">{formatPrice(item.price * item.qty)}</p>
        </li>
      ))}
    </ul>
  )
}
