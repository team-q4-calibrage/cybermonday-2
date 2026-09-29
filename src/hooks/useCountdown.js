import { useEffect, useState } from 'react'

const pad = (n) => String(n).padStart(2, '0')

export default function useCountdown(endsAt) {
  const target = new Date(endsAt).getTime()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const s = Math.floor(Math.max(0, target - now) / 1000)

  return {
    days: Math.floor(s / 86400),
    hours: pad(Math.floor((s % 86400) / 3600)),
    minutes: pad(Math.floor((s % 3600) / 60)),
    seconds: pad(s % 60),
  }
}
