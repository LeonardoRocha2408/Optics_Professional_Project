import React from 'react';
export default function Services() {
  const services = [
    { title: 'Exame de vista completo', desc: 'Avaliação de acuidade, refração e saúde ocular', img: 'https://images.unsplash.com/photo-1580281657521-9b91f4a3f8a6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3' },
    { title: 'Lentes sob medida', desc: 'Lentes progressivas, monofocais e tratamentos', img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3' },
    { title: 'Armações exclusivas', desc: 'Marcas nacionais e internacionais', img: 'https://images.unsplash.com/photo-1584362521074-03b74f2a6ee1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3' },
    { title: 'Ajuste e manutenção', desc: 'Limpeza ultrassônica e pequenos reparos', img: 'https://images.unsplash.com/photo-1596204971872-6f0b78f4c6a0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3' }
  ]
  
  return (
    <section id="servicos" className="container">
      <h2>Nossos serviços</h2>
      <div className="services">
        {services.map((s, i) => (
          <div key={i} className="service">
            <img src={s.img} alt={s.title} />
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

