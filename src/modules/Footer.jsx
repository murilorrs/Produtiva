import React from "react";
import { Link } from "react-router-dom";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

import './footer.css'

const Footer = () => {
  return(
    <div>
      <div className="conteudo-geral">
        <div className="titulo-contato">
        <h2 >Contatos:</h2>
        </div>

        <div className="conteudo-contato">
        <ul>
            <li>
              <a href="https://wa.me/5562998071228"><h3><BsTelephoneOutboundFill/> Telefone</h3></a>
            </li>

            <li>
               <a href="mailto:murilorodriguesrrs@gmail.com"><h3><AiOutlineMail/> E-mail</h3></a>
            </li>

            <li>
               <a href="https://www.linkedin.com/in/ramon-correia-paes-junior-5170a534/"><h3><FaLinkedin/> LinkedIn</h3></a>
            </li>
        </ul>
        <ul>
            <li>
               <a href="https://www.instagram.com/irrigacaoprodutiva?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><h3><FaInstagram/> Instagram</h3></a>
            </li>

            <li>
               <a href="https://wa.me/5562998071228"><h3><FaWhatsapp/> WhatsApp</h3></a>
            </li>

            <li>
               <a href=""><h3><CiFacebook/> Facebook</h3></a>
            </li>
        </ul>
        </div>
      </div>
        <div className="conteudo-final">
          Todos os direitos reservados©
        </div>
    </div>
  )
}

export default Footer;