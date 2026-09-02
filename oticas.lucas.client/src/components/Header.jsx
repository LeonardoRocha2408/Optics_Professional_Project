import React from 'react';
export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="brand">
          <div className="logo">OV</div>
          <div>
            <div>Ótica <strong>Visão Clara</strong></div>
            <div className="brand-subtitle">Excelência em cuidado visual</div>
          </div>
        </div>
        <nav aria-label="Menu">
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
          <a className="cta" href="#contato">Agende seu exame</a>
        </nav>
      </div>
    </header>
  )
}

