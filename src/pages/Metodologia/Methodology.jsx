import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { GrCycle } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

import './Metogologia.css'

const Methodology = () => {
  return(
    <div className="metodologia-principal">
      <div className="metodologia-titulo">
        <h2 >METODOLOGIA</h2>
        <p>Para atender as expectativas dos clientes, nossa metodologia envolve um ciclo completo desde a avaliação inicial até a entrega dos serviços.</p>
      </div>
      <div className="metodologias">
        <h3> <FaMagnifyingGlass/> Avaliação Inicial</h3>
        <h3> <BsGraphUp/> Construção da Solução</h3>
        <h3> <CiBookmarkCheck/> Aprovação do Plano de Serviço</h3>
        <h3> <GiTeacher/> Treinamento</h3>
        <h3> <AiOutlineSolution/> Implementação da Solução</h3>
        <h3> <GrCycle/> Melhoria Contínua</h3>
        <h3> <TbTruckDelivery/> Entrega de serviços</h3>
      </div>
    </div>
  )
}

export default Methodology