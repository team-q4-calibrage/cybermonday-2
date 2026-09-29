import { useState } from 'react'

// Image with a soft tinted placeholder, so the layout holds before the real photos are added.
export default function SmartImage({ src, alt, className = '', eager = false, ratio = '1 / 1' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`img-frame ${className}`} style={{ aspectRatio: ratio }}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
