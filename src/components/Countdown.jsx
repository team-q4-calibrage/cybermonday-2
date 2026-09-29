import useCountdown from '../hooks/useCountdown.js'

export default function Countdown({ endsAt, size = 'sm', hideDays = false }) {
  const { days, hours, minutes, seconds } = useCountdown(endsAt)
  const units = [
    ...(hideDays ? [] : [[days, 'j']]),
    [hours, 'h'],
    [minutes, 'min'],
    [seconds, 's'],
  ]

  return (
    <div className={`countdown countdown--${size}`} role="timer" aria-label="Temps restant avant la fin des offres">
      {units.map(([value, label]) => (
        <span key={label} className="countdown__unit">
          <span className="countdown__value">{value}</span>
          <span className="countdown__label">{label}</span>
        </span>
      ))}
    </div>
  )
}
