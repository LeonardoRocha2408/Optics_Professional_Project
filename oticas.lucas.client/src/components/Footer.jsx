import React from 'react';
export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div>© {new Date().getFullYear()} Ótica Visão Clara — Todos os direitos reservados</div>
        <div>Desenvolvido com cuidado para sua visão</div>
      </div>
    </footer>
  )
}

