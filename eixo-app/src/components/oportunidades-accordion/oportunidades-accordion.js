import React, { Component } from 'react';
import './oportunidades-accordion.scss';

var oportunidades = [
  {id:0, open: false, titulo: "Deslocamento", desc: "Mais de 2,8 milhões de deslocamentos diários ocorrem entre o leste de São Paulo e outras regiôes*. O Eixo Platina criará um ecossistema de negócios, comércio, serviços e lazer para atender a população, encurtando trajetos, reduzindo congestionamentos e otimizando o tempo."},
  {id:1, open: false,titulo: "Qualidade de vida", desc: "Pesquisa afirma que profissionais aceitam receber 10% menos em sua remuneração para trabalhar perto de casa*. isso faz do Eixo Platina um grande atrativo para empresas que buscam recrutar mão de obra qualificada."},
  {id:2, open: false,titulo: "Potencial do Bairro", desc: "O Tatuapé é o bairro que mais se desenvolveu em São Paulo. Possui vasta rede de serviços, comércio, educação, transporte, fácil acesso às rodovias, parques, shoppings, além de grandes hospitais. É uma das melhores e mais qualificadas regiões de São Paulo para morar, viver e investir."},
  {id:3, open: false,titulo: "Jovens Talentos", desc: "Estudantes em início de carreira tendem a fixar residências em outras regiões, por melhores oportunidades de trabalho, estudos e networking. Além de atrair grandes empresas, universidades e coworking, o Eixo Platina contará com residenciais compactos para os jovens se desenvolverem em sua região."},
];
export default class OportunidadesAccordion extends Component {

  state = {
    oportunidades: oportunidades
  }

  openAccordion = (e) =>{
    var open = this.state.oportunidades[e.currentTarget.getAttribute('id')].open;
    var newOportunidades = this.state.oportunidades;
    newOportunidades[e.currentTarget.getAttribute('id')].open = !open;
    this.setState({oportunidades: newOportunidades});
  }
    
    render() {
      return (
        <div className="oportunidades-accordion-area">
          <div className="href-link" id="oportunidades"></div>
        {Object.keys(this.state.oportunidades).map(op => {
          return (
            <div key={this.state.oportunidades[op].id} id={this.state.oportunidades[op].id}  onClick={this.openAccordion} className={"oportunidade-accordion oportunidade-" + (this.state.oportunidades[op].id + 1)}>
              <div className="oportunidade-info">
                <div className="oportunidade-title">{this.state.oportunidades[op].titulo}</div>
                {this.state.oportunidades[op].open?<div className="oportunidade-text">{this.state.oportunidades[op].desc}</div>: null}
              </div>
            </div>
          )
        })}
       </div>
      );
    }
  }