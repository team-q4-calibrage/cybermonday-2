export default function Stars({ value = 5 }) {
  return (
    <span className="stars" aria-label={`${value} sur 5`}>
      {'★'.repeat(Math.round(value))}
    </span>
  )
}
