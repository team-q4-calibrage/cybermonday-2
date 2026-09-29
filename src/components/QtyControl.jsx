export default function QtyControl({ value, onChange, max = 10, label = 'Quantité' }) {
  return (
    <div className="qty" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} aria-label="Retirer un">−</button>
      <span aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(Math.min(max, value + 1))} aria-label="Ajouter un">+</button>
    </div>
  )
}
