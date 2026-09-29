import Stars from './Stars.jsx'
import { reviewSummary, reviews } from '../data/products.js'

export default function Reviews() {
  return (
    <section className="section container" aria-labelledby="reviews-title">
      <div className="section__head">
        <h2 id="reviews-title">{reviewSummary.rating}/5 sur {reviewSummary.count} avis</h2>
        <p className="muted">Des clients partout au Bénin.</p>
      </div>
      <ul className="reviews">
        {reviews.map((r) => (
          <li key={r.name} className="review">
            <Stars value={r.rating} />
            <blockquote>« {r.text} »</blockquote>
            <p className="review__author">{r.name} <span className="muted">· {r.city} · Achat vérifié</span></p>
          </li>
        ))}
      </ul>
    </section>
  )
}
