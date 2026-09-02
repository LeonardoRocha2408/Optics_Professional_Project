import React from 'react';
export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1520975923399-3c6d5d2b0b6c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1580894908360-7e4b1d6b6b0f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1549399548-8f3a5c0b7f9b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3'
  ]
  
  return (
    <section id="galeria" className="container">
      <h2>Galeria</h2>
      <div className="gallery" aria-live="polite">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Amostra ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

