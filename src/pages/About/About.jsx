import React from "react";

import pivo1 from '../../assets/pivot1.jpg';
import pivo2 from '../../assets/pivo2.jpg';
import mangueira from '../../assets/mangueira.jpg';
import gotejamento from '../../assets/gotejamento.jpg';
import gotejamento2 from '../../assets/gotejamento2.jpg';
import gotejamento3 from '../../assets/gotejamento3.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-container-principal">
      <h2 className="about-titulo">SOBRE <span>NOSSA EMPRESA</span></h2>
      <div className="about-container-cinza">
        <div className="about-content">
          <div className="about-text">
            <p><span className="span-produtiva">Produtiva</span> is a leading science-based agtech company. We help millions of farmers around the world to grow safe and nutritious food, while taking care of the planet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptate animi repellat iusto deserunt ad similique perferendis impedit repudiandae culpa labore nemo, consequuntur totam! Sint facilis adipisci cupiditate vitae ipsa!.</p>
          </div>
            <img src={gotejamento2} alt="Irrigation system" className="about-image" />
        </div>
      </div>

      <div className="about-container-branco">
        <div className="about-content">
          <div className="about-text">
            <h3>Our ambition</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsum! Voluptatibus dolorum minus quasi nobis, architecto alias commodi impedit doloribus, molestiae, distinctio dolores temporibus illum assumenda saepe consequatur cumque minima.</p>
            <br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsum! Voluptatibus dolorum minus quasi nobis, architecto alias commodi impedit doloribus, molestiae, distinctio dolores temporibus illum assumenda saepe consequatur cumque minima.</p>
          </div>
            <img src={pivo1} alt="Pivot irrigation" className="about-image" />
        </div>
      </div>

      <div className="about-container-cinza">
        <div className="about-content">
          <div className="about-text">
            <h3>Our <span>core businesses</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo, similique neque eos quia repudiandae vitae voluptas. Adipisci vitae eaque quasi perferendis sint sunt. Repellendus exercitationem sit inventore labore impedit!</p>
          </div>
            <img src={pivo2} alt="Pivot irrigation system" className="about-image" />
        </div>
      </div>

      <div className="about-container-branco">
        <div className="about-content">
          <div className="about-text">
            <h3>The value we create</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia est nihil reiciendis fugiat sequi ducimus iure, aliquam accusamus, amet quidem earum? Quam maiores, unde expedita nesciunt quis officiis praesentium?</p>
          </div>
          <img src={gotejamento} alt="Drip irrigation" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
