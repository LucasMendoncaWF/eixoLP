import React, { Component } from 'react';
import './diferenciais-slider.scss';

var diferenciais = [
{id:0,  tamanho: "81.400 m²", legenda: "de lajes corporativas.", desc: "Conexão entre grandes empresas e mais de 200.000 profissionais qualificados."},
  {id:1,  tamanho: "23.000 m²", legenda: "para pequenos e médios negócios.", desc: "Oferta de salas comerciais e coworking cria uma promissoa rede de networking."},
  {id:2,  tamanho: "22.500 m²", legenda: "para o turismo, eventos e cultura.", desc: "Centro de convenções, 2 hotéis e o maior teatro de São Paulo estarão aqui."},
  {id:3,  tamanho: "37.900 m²", legenda: "para lazer, saúde e educação.", desc: "O Eixo Platina reunirá cinema, centros de varejo e de serviços, um novo hospital e um inédito campus de pós-graduação."},
];
export default class DiferenciaisSlider extends Component {

  componentDidMount() {
    this.props.setMax(diferenciais[diferenciais.length -1].id);
 }

    getCurrentEmpreendimento = () =>{
      for(var diferencial of diferenciais){
        if(diferencial.id === this.props.idCurrent){
          return (
            <div className={"diferenciais diferencial-" + (diferencial.id + 1)}>
              <div className="diferencial-numero">{diferencial.tamanho}</div>
              <div className="diferencial-numero-legenda">{diferencial.legenda}</div>
              <div className="diferencial-img"></div>
              <div className="diferencial-desc">{diferencial.desc}</div>
            </div>
          )       
        }
      }
    }
    
    render() {
      return (
        <div className="diferenciais area" >
        <div className="href-link" id="desenvolvimento-humano"></div>
        {this.getCurrentEmpreendimento()}
       </div>
      );
    }
  }