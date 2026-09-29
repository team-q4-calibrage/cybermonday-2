import { Link } from 'react-router'
import SmartImage from './SmartImage.jsx'
import { useCart } from '../context/cart.js'
import { imageFor } from '../data/products.js'
import { discountPct, formatPrice } from '../utils/format.js'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const lowStock = product.stockLeft <= 10

  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card__media">
        <SmartImage src={imageFor(product.id)} alt={product.name} ratio="4 / 5" />
        <span className="tag">-{discountPct(product.oldPrice, product.price)} %</span>
      </Link>
      <div className="card__body">
        <Link to={`/product/${product.id}`} className="card__name">{product.name}</Link>
        <p className="card__price">
          <span>{formatPrice(product.price)}</span>
          <s>{formatPrice(product.oldPrice)}</s>
        </p>
        {lowStock && <p className="card__stock">Plus que {product.stockLeft} en stock</p>}
      </div>
      <button type="button" className="card__add" onClick={() => addItem(product)}>
        Ajouter au panier
      </button>
    </article>
  )
}
