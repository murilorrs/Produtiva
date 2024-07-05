import React, { useState, useEffect } from "react";
import "./Home.css";
import gotejamento from '../../assets/gotejamento.jpg';
import irrigacao from '../../assets/irrigacao.jpg';
import mangueira from '../../assets/mangueira.jpg';
import plantas from '../../assets/plantas1.jpg';
import plantas2 from '../../assets/plantas2.jpg';
import plantas3 from '../../assets/plantas3.jpg';
import plantas4 from '../../assets/plantas4.jpg';



const Home = () => {
  const images = [gotejamento, irrigacao, mangueira, plantas, plantas4];
  const [imagemAtual, setImagemAtual] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Alterna a cada 3 segundos

    return () => clearInterval(intervalo);
  }, [images.length]);

  useEffect(() => {
    setImagemAtual(images[currentIndex]);
  }, [currentIndex, images]);

  return (
    <div className="conteudo_geral">
      <img className="imagem_pivo mostrar" src={imagemAtual} alt="" />
      <div className="conteudo-principal">
        <h2>POR QUE <span>IRRIGAÇÃO PRODUTIVA?</span></h2>
        <div className="paragrafo">
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
        </div>

        <div className="paragrafo">
          <h3>Ipsun</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
        </div>

        <div className="paragrafo">
          <h3>Dolor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque perspiciatis porro pariatur aut amet, laboriosam quos cumque ullam? Delectus eum repellendus tempora excepturi aliquid, eaque tenetur et magnam vel!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
