import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import SmartImage from '../components/SmartImage.jsx'
import Stars from '../components/Stars.jsx'
import QtyControl from '../components/QtyControl.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import TrustBadges from '../components/TrustBadges.jsx'
import { useCart } from '../context/cart.js'
import { imageFor, products } from '../data/products.js'
import { discountPct, formatPrice } from '../utils/format.js'

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="section container empty">
        <h1>Produit introuvable</h1>
        <Link to="/shop" className="btn">Retour à la boutique</Link>
      </main>
    )
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)
  const fallbackRelated = products.filter((p) => p.id !== product.id && p.bestSeller).slice(0, 4)

  const buyNow = () => {
    addItem(product, qty, { openDrawer: false })
    navigate('/checkout')
  }

  return (
    <main>
      <section className="pdp container">
        <SmartImage src={imageFor(product.id)} alt={product.name} ratio="4 / 5" className="pdp__img" eager />

        <div className="pdp__info">
          <nav className="crumbs" aria-label="Fil d'Ariane">
            <Link to="/shop">Boutique</Link> / <Link to={`/shop?cat=${encodeURIComponent(product.category)}`}>{product.category}</Link>
          </nav>
          <h1>{product.name}</h1>
          <p className="pdp__rating">
            <Stars value={product.rating} /> <span className="muted">{product.rating} · {product.reviewCount} avis</span>
          </p>

          <p className="pdp__price">
            <span>{formatPrice(product.price)}</span>
            <s>{formatPrice(product.oldPrice)}</s>
            <span className="tag tag--inline">-{discountPct(product.oldPrice, product.price)} %</span>
          </p>

          <p className="pdp__desc">{product.description}</p>

          <p className={`stock-note ${product.stockLeft <= 10 ? 'is-low' : ''}`}>
            {product.stockLeft <= 10 ? `Plus que ${product.stockLeft} en stock, commandez vite` : 'En stock, expédié sous 24 h'}
          </p>

          <div className="pdp__buy">
            <QtyControl value={qty} onChange={(q) => setQty(Math.max(1, q))} max={product.stockLeft} />
            <button type="button" className="btn btn--large pdp__add" onClick={() => addItem(product, qty)}>
              Ajouter au panier
            </button>
          </div>
          <button type="button" className="btn btn--large btn--ghost btn--block" onClick={buyNow}>
            Acheter maintenant
          </button>

          <ul className="pdp__details">
            {product.details.map((d) => <li key={d}>{d}</li>)}
          </ul>

          <TrustBadges compact />
        </div>
      </section>

      <section className="section container" aria-labelledby="related-title">
        <div className="section__head">
          <h2 id="related-title">Vous aimerez aussi</h2>
        </div>
        <ProductGrid products={related.length >= 2 ? related : fallbackRelated} />
      </section>

      <div className="sticky-buy">
        <div>
          <p className="sticky-buy__price">{formatPrice(product.price)}</p>
          <s className="muted">{formatPrice(product.oldPrice)}</s>
        </div>
        <button type="button" className="btn" onClick={() => addItem(product, qty)}>Ajouter au panier</button>
      </div>
    </main>
  )
}
