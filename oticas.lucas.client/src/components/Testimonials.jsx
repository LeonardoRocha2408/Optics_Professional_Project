import React from 'react';
export default function Testimonials() {
  const testimonials = [
    { name: 'Mariana S.', text: 'Atendimento excelente, minhas lentes chegaram antes do prazo e sem adaptação ruim.' },
    { name: 'Carlos P.', text: 'Profissionais gentis e ótima seleção de armações.' },
    { name: 'Ana R.', text: 'Exame detalhado e explicaram tudo com calma.' }
  ]
  
  return (
    <section className="container">
      <h2>Depoimentos</h2>
      <div className="testimonials">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <p>&ldquo;{t.text}&rdquo;</p>
            <div className="testimonial-name">- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

