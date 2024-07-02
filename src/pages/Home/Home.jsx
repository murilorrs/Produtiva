import React from "react";

import './Home.css'
import gotejamento from '../../assets/gotejamento.jpg'

const Home = () => {
  return (
    <div className="conteudo_geral">
      {/* <h2 className="frase-logo">Ainda há tempo de lucrar mais <br></br>com menos</h2> */}
      <img className="imagem_pivo" src={gotejamento} alt="" />
      <div className="conteudo-principal">
        <h2>POR QUE <span>IRRIGAÇÂO PRODUTIVA?</span></h2>
        <div className="paragrafo">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
        </div>

        <div className="paragrafo">
          <h3>Ipsun</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
        </div>

        <div className="paragrafo">
          <h3>Dolor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>

        </div>
        
      </div>
    </div>
  );
};

export default Home;
