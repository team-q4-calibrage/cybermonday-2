import { useSearchParams } from 'react-router'
import ProductGrid from '../components/ProductGrid.jsx'
import { categories, offer, products } from '../data/products.js'

const sorts = {
  popular: { label: 'Populaires', fn: (a, b) => b.reviewCount - a.reviewCount },
  'price-asc': { label: 'Prix croissant', fn: (a, b) => a.price - b.price },
  'price-desc': { label: 'Prix décroissant', fn: (a, b) => b.price - a.price },
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') ?? ''
  const sort = sorts[params.get('sort')] ? params.get('sort') : 'popular'

  const update = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const list = products.filter((p) => !cat || p.category === cat).sort(sorts[sort].fn)

  return (
    <main className="section container shop">
      <div className="shop__head">
        <p className="eyebrow">{offer.label} · jusqu’à {offer.discount}</p>
        <h1>{cat || 'Toute la boutique'}</h1>
      </div>

      <div className="toolbar">
        <div className="chips" role="group" aria-label="Filtrer par catégorie">
          {['', ...categories].map((c) => (
            <button
              key={c || 'all'}
              type="button"
              className={`chip ${cat === c ? 'is-active' : ''}`}
              aria-pressed={cat === c}
              onClick={() => update('cat', c)}
            >
              {c || 'Tout'}
            </button>
          ))}
        </div>
        <label className="sort">
          <span className="muted">Trier</span>
          <select value={sort} onChange={(e) => update('sort', e.target.value === 'popular' ? '' : e.target.value)}>
            {Object.entries(sorts).map(([key, s]) => (
              <option key={key} value={key}>{s.label}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="muted count">{list.length} produit{list.length > 1 ? 's' : ''}</p>
      <ProductGrid products={list} />
    </main>
  )
}
