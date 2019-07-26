import React, { Component } from 'react';
import './diferenciais.scss';
export default class Diferenciais extends Component {
    
    render() {
      return (
        <div className="diferenciais">
          <div className="href-link" id="desenvolvimento-humano"></div>
          <div className="diferencial diferencial-1">
            <div className="diferencial-numero">81.400 m²</div>
            <div className="diferencial-numero-legenda">de lajes corporativas.</div>
            <div className="diferencial-img"></div>
            <div className="diferencial-desc">Conexão entre grandes empresas e mais de 200.000 profissionais qualificados.</div>
          </div>
          <div className="diferencial diferencial-2">
            <div className="diferencial-numero">23.000 m²</div>
            <div className="diferencial-numero-legenda">para pequenos e médios negócios</div>
            <div className="diferencial-img"></div>
            <div className="diferencial-desc">Oferta de salas comerciais e coworking cria uma promissoa rede de networking</div>
          </div>
          <div className="diferencial diferencial-3">
            <div className="diferencial-numero">22.500 m²</div>
            <div className="diferencial-numero-legenda">para o turismo, eventos e cultura.</div>
            <div className="diferencial-img"></div>
            <div className="diferencial-desc">Centro de convenções, 2 hotéis e o maior teatro de São Paulo estarão aqui.</div>
          </div>
          <div className="diferencial diferencial-4">
            <div className="diferencial-numero">37.900 m²</div>
            <div className="diferencial-numero-legenda">para lazer, saúde e educação.</div>
            <div className="diferencial-img"></div>
            <div className="diferencial-desc">O Eixo Platina reunirá cinema, centros de varejo e de serviços, um novo hospital e um inédito campus de pós-graduação.</div>
          </div>
          <div className="diferencial diferencial-2"></div>
          <div className="diferencial diferencial-3"></div>
          <div className="diferencial diferencial-4"></div>
        </div>
      );
    }
  }