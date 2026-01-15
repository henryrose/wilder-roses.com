import { useState, useEffect } from 'react'

const photos = [
  '/photo1.jpg',
  '/photo2.jpg',
  '/photo3.jpg',
  '/photo4.jpg',
  '/photo5.jpg',
]

function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`Family photo ${index + 1}`}
            className={`carousel-image ${index === current ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
