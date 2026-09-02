import React from 'react';
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '', data: '', hora: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nome || !form.email) {
      setStatus({ type: 'error', text: 'Preencha nome e e-mail.' })
      return
    }
    setStatus({ type: 'success', text: 'Pedido recebido! Entraremos em contato para confirmar.' })
    setForm({ nome: '', email: '', mensagem: '', data: '', hora: '' })
  }

  return (
    <section id="contato" className="container">
      <h2>Contato & Agendamento</h2>
      <div className="contact">
        <form onSubmit={handleSubmit} aria-label="Formulário de contato">
          {status && (
            <div className={`form-status ${status.type}`}>
              {status.text}
            </div>
          )}
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
          />
          
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="seu@email.com"
          />
          
          <label htmlFor="mensagem">Mensagem / Observações</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows="4"
            placeholder="Deseja exame, óculos, manutenção..."
          />
          
          <label htmlFor="data">Data preferida</label>
          <input
            id="data"
            name="data"
            value={form.data}
            onChange={handleChange}
            type="date"
          />
          
          <label htmlFor="hora">Hora preferida</label>
          <input
            id="hora"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            type="time"
          />
          
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">Enviar</button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setForm({ nome: '', email: '', mensagem: '', data: '', hora: '' })}
            >
              Limpar
            </button>
          </div>
        </form>

        <aside className="contact-info">
          <div className="contact-card">
            <h3>Nossa loja</h3>
            <p>Rua Exemplo, 123 — Centro<br />Seg-Sex: 9h–18h<br />(11) 99999-9999</p>
            <a className="cta" href="tel:+5511999999999">Ligar agora</a>
            <div className="contact-note">Atendimento presencial e retirada de óculos com horário marcado.</div>
          </div>
        </aside>
      </div>
    </section>
  )
}

