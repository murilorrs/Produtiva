import React, { useState } from "react";
import emailjs from '@emailjs/browser'

import './Form.css'

const Formulario = ({ form_name }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Estado para a mensagem de sucesso
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro

  const sendEmail = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    const templateParms = {
      from_name: name,
      email: email,
      cidade: cidade,
      estado: estado,
      message: mensagem,
    };

    emailjs.send('service_78vqxmy', 'template_cxcw2yr', templateParms, "YkX7nLk39iwSL-GKL")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);
        setSuccessMessage("Formulário recebido com sucesso!"); // Define a mensagem de sucesso
        setErrorMessage(""); // Limpa a mensagem de erro, se houver
        setName('');
        setEmail('');
        setEstado('');
        setCidade('');
        setMensagem('');
      }, (error) => {
        console.log("Erro: ", error);
        setErrorMessage("Erro ao enviar o formulário. Por favor, tente novamente."); // Define a mensagem de erro
        setSuccessMessage(""); // Limpa a mensagem de sucesso, se houver
      });
  }

  return (
    <div className="form-principal">
      <div className="form-geral">
        <div className="form">
          <h3>{form_name}</h3>
          <form onSubmit={sendEmail}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-nome"
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

            <div className="form-actions">
              <button type="submit">Enviar</button>
              <div className="message-container">
                {successMessage && <div className="alert success">{successMessage}</div>}
                {errorMessage && <div className="alert error">{errorMessage}</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
