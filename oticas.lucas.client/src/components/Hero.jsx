import React from 'react';
export default function Hero() {
  return (
    <section className="container">
      <div className="hero-card hero">
        <div>
          <h1 className="title">Veja o mundo com clareza — lentes e armações sob medida</h1>
          <p className="lead">Exame de vista completo, tecnologia de ponta para lentes e uma seleção de armações das melhores marcas. Atendimento humanizado e parcelamento em até 6x.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#contato">Agendar exame</a>
            <a className="btn btn-secondary" href="#galeria">Ver armações</a>
          </div>

          <div className="features">
            <div className="feature">
              <div className="feature-title">Exame Profissional</div>
              <p>Com optometristas certificados</p>
            </div>
            <div className="feature">
              <div className="feature-title">Lentes de Qualidade</div>
              <p>Antirreflexo, Photochromic e proteção UV</p>
            </div>
            <div className="feature">
              <div className="feature-title">Ajuste Grátis</div>
              <p>Ajustes e manutenção por 12 meses</p>
            </div>
          </div>
        </div>

        <aside className="hero-aside">
          <img src="https://images.unsplash.com/photo-1516728778615-2d590ea1856f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Ótica" />
          <div className="hero-caption">Armações modernas e clássicas</div>
        </aside>
      </div>
    </section>
  )
}

