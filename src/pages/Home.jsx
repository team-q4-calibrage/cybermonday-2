import { Link } from 'react-router'
import SmartImage from '../components/SmartImage.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Reviews from '../components/Reviews.jsx'
import TrustBadges from '../components/TrustBadges.jsx'
import Countdown from '../components/Countdown.jsx'
import FlashDeal from '../components/FlashDeal.jsx'
import { useCart } from '../context/cart.js'
import { categories, imageFor, offer, products } from '../data/products.js'
import { discountPct, formatPrice } from '../utils/format.js'

export default function Home() {
  const { addItem } = useCart()
  const bestSellers = products.filter((p) => p.bestSeller && p.id !== 'pack-setup')
  const bundle = products.find((p) => p.id === 'pack-setup')

  return (
    <main>
      <section className="container">
        <div className="hero">
          <div className="hero__text">
            <p className="hero__kicker">{offer.label}</p>
            <h1>
              Jusqu’à <span className="hero__big">{offer.discount}</span> sur la tech.
            </h1>
            <p className="hero__lead">
              Audio, charge, montres et bureau : les accessoires qu’on utilise tous les jours, au prix le plus bas de l’année.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn btn--large btn--light">Voir toutes les offres</Link>
              <Link to={`/product/${bundle.id}`} className="btn btn--large btn--outline-light">Le Pack Setup Pro</Link>
            </div>
            <div className="hero__timer">
              <span>Fin des offres dans</span>
              <Countdown endsAt={offer.endsAt} />
            </div>
          </div>
          <SmartImage
            src="/images/hero.webp"
            alt="Écouteurs, montre connectée, batterie externe et clavier compact posés sur un fond bleu électrique"
            ratio="1 / 1"
            className="hero__image"
            eager
          />
        </div>
      </section>

      <div className="container trust-wrap">
        <TrustBadges />
      </div>

      <FlashDeal />

      <section className="section container" aria-labelledby="cat-title">
        <div className="section__head">
          <h2 id="cat-title">Par catégorie</h2>
          <Link to="/shop" className="link">Tout voir</Link>
        </div>
        <ul className="cats">
          {categories.map((c) => {
            const cover = products.find((p) => p.category === c && p.id !== 'pack-setup')
            const count = products.filter((p) => p.category === c).length
            return (
              <li key={c}>
                <Link to={`/shop?cat=${encodeURIComponent(c)}`} className="cat">
                  <SmartImage src={imageFor(cover.id)} alt="" ratio="1 / 1" />
                  <span className="cat__label">{c} <span className="muted">{count}</span></span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="section container" aria-labelledby="best-title">
        <div className="section__head">
          <h2 id="best-title">Les plus vendus</h2>
          <Link to="/shop" className="link">Toute la boutique</Link>
        </div>
        <ProductGrid products={bestSellers} />
      </section>

      <div className="container">
        <section className="bundle" aria-labelledby="bundle-title">
          <SmartImage src={imageFor(bundle.id)} alt={bundle.name} ratio="4 / 3" className="bundle__img" />
          <div className="bundle__text">
            <p className="eyebrow">Le pack le plus rentable</p>
            <h2 id="bundle-title">{bundle.name}</h2>
            <p className="muted">{bundle.description}</p>
            <p className="bundle__price">
              <span>{formatPrice(bundle.price)}</span>
              <s>{formatPrice(bundle.oldPrice)}</s>
              <span className="tag tag--inline">-{discountPct(bundle.oldPrice, bundle.price)} %</span>
            </p>
            <p className="stock-note is-low">Plus que {bundle.stockLeft} packs disponibles</p>
            <div className="hero__actions">
              <button type="button" className="btn btn--large" onClick={() => addItem(bundle)}>Ajouter au panier</button>
              <Link to={`/product/${bundle.id}`} className="btn btn--large btn--ghost">Voir le détail</Link>
            </div>
          </div>
        </section>
      </div>

      <Reviews />
    </main>
  )
}
