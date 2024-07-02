import React, { useState } from "react";
import './Form.css'

const Formulario = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [formEnviado, setFormEnviado] = useState(false); // Estado para controlar se o formulário foi enviado

  const sendEmail = () => {
    event.preventDefault();

    setFormEnviado(true);
    alert('enviado')
  }


  return (
    <div className="form-principal">
      <div className="form-geral">
        <h3>Formulário de Contato</h3>
        {formEnviado ? (
          <div className="form-enviado">
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Estado:</strong> {estado}</p>
            <p><strong>Cidade:</strong> {cidade}</p>
            <p><strong>Mensagem:</strong> {mensagem}</p>
          </div>
        ) : (
          <div className="form">
            <form onSubmit={sendEmail}>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              />

              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />

              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Formulario;
