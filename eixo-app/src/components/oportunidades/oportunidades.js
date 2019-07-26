import React, { Component } from 'react';
import './oportunidades.scss';
import img1 from '../../images/DESLOCAMENTO.png';
import img2 from '../../images/qualidade.png';
import img3 from '../../images/potencial.png';
import img4 from '../../images/jovens_talentos.png';

var oportunidades = [
  {id:0, img: img1, titulo: "Deslocamento", desc: "Mais de 2,8 milhões de deslocamentos diários ocorrem entre o leste de São Paulo e outras regiôes*. O Eixo Platina criará um ecossistema de negócios, comércio, serviços e lazer para atender a população, encurtando trajetos, reduzindo congestionamentos e otimizando o tempo."},
  {id:1, img: img2, titulo: "Qualidade de vida", desc: "Pesquisa afirma que profissionais aceitam receber 10% menos em sua remuneração para trabalhar perto de casa*. isso faz do Eixo Platina um grande atrativo para empresas que buscam recrutar mão de obra qualificada."},
  {id:2, img: img3, titulo: "Potencial do Bairro", desc: "O Tatuapé é o bairro que mais se desenvolveu em São Paulo. Possui vasta rede de serviços, comércio, educação, transporte, fácil acesso às rodovias, parques, shoppings, além de grandes hospitais. É uma das melhores e mais qualificadas regiões de São Paulo para morar, viver e investir."},
  {id:3, img: img4, titulo: "Jovens Talentos", desc: "Estudantes em início de carreira tendem a fixar residências em outras regiões, por melhores oportunidades de trabalho, estudos e networking. Além de atrair grandes empresas, universidades e coworking, o Eixo Platina contará com residenciais compactos para os jovens se desenvolverem em sua região."},
];
export default class Oportunidades extends Component {

  state = {
    oportunidades: oportunidades
  }

  componentDidMount() {
    this.props.setMax(oportunidades[oportunidades.length -1].id);
 }

    getCurrentEmpreendimento = () =>{
      for(var oportunidade of this.state.oportunidades){
        if(oportunidade.id === this.props.idCurrent){
          return (
            <div className="oportunidade">
              <div className="oportunidade-img"><img alt="oportunidade" src={oportunidade.img}/></div>
              <div className="oportunidade-info">
                <div className="oportunidade-title">{oportunidade.titulo}</div>
                <div className="oportunidade-text">{oportunidade.desc}</div>
              </div>
            </div>
          )       
        }
      }
    }
    
    render() {
      return (
        <div className="oportunidades-area"> 
          <div className="href-link" id="oportunidades"></div>
          { Object.keys(this.state.oportunidades).map(o => {
            if(this.state.oportunidades[o].id === this.props.idCurrent){
              return (
                <div key={o} className="oportunidade">
                  <div className="oportunidade-img"><img alt="oportunidade" src={this.state.oportunidades[o].img}/></div>
                  <div className="oportunidade-info">
                    <div className="oportunidade-title">{this.state.oportunidades[o].titulo}</div>
                    <div className="oportunidade-text">{this.state.oportunidades[o].desc}</div>
                  </div>
                </div>
              )       
            }else{
              return null;
            }
          })}
       </div>
      );
    }
  }