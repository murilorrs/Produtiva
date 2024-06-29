import React from "react";

import './paginas.css'
import pivo from '../assets/irrigacao.jpg'

const Home = () => {
  return (
    <div className="conteudo_geral">
      {/* <h2 className="frase-logo">Ainda há tempo de lucrar mais <br></br>com menos</h2> */}
      <img className="imagem_pivo" src={pivo} alt="" />
      <div className="conteudo-principal">
        <h2>POR QUE IRRIGAÇÂO <span>PRODUTIVA?</span></h2>
        <div className="paragrafo">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
        </div>

        <div className="paragrafo">
          <h3>Ipsun</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
        </div>

        <div className="paragrafo">
          <h3>dolor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
