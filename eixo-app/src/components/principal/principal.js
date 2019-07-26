import React, { Component } from 'react';
import './principal.scss';
import LineCenter from '../lineCenter/line-center';
import Header from '../header/header';
import BannerInicial from '../bannerInicial/banner-inicial';
import Diferenciais from '../diferenciais/diferenciais';
import Slider from '../slider/slider';
import OportunidadeAccordion from '../oportunidades-accordion/oportunidades-accordion.js';
import Footer from '../footer/footer';
import Portfolio from '../portfolio/portfolio';

function detectmob() { 
  if(window.innerWidth <= 1024 && window.innerHeight <= 1024) {
    return true;
  } else {
    return false;
  }
 }

export default class Principal extends Component {

  state ={
    mobile: detectmob()
  }
    
    render() {
      //Imagem estorada no portfolio e arrumar textos no slider de produtos
      return (
        <div className="principal-container">  
            <LineCenter />
            <Header mobile={this.state.mobile}/>
            <BannerInicial mobile={this.state.mobile} />     
            <div className="text-line">
              <div className="text-line-desc">Para cada demanda da região, uma oportunidade.</div>
              <div className="text-line-txt" style={{top: "-75px"}}>O Leste de São Paulo concentra a maior parte da população da Capital. É lar de mais de 200 mil profissionais, hoje atuantes em cargos de liderança em outros cantos da cidade. É a terra-natal de muitos jovens empreendedores e mentes criativas que buscam se desenvolver longe de suas casas. A Porte desenvolveu o Eixo Platina para ser a linha que conecta demandas como essas a soluções urbanas voltadas para os negócios, educação, saúde, serviços, cultura, lazer e muito mais.</div>
              <div className="text-line-ball"></div>
            </div>
            {!this.state.mobile? <Slider /> : <OportunidadeAccordion />}
            <div className="text-line">
              <div className="text-line-desc">360.000 m² destinados ao desenvolvimento humano.</div>
              <div className="text-line-txt" style={{top: "-45px"}}>A 1ª fase do Eixo Platina reunirá seis grandes empreendimentos no Tatuapé, com o objetivo de gerar oportunidades de trabalho qualificado, networking, vagas em pós-graduação, além de todas as condições necessárias para viver o melhor da cidade.</div>
              <div className="text-line-ball"></div>
            </div>
            {!this.state.mobile?<Diferenciais /> : <Slider component="diferenciais"/>}
            <div className="text-line">
              <div className="text-line-desc">O Eixo Platina está próximo de 3 estações de metrô, corredores de ônibus e grandes vias de acesso.</div>
              <div className="text-line-txt" style={{top: "-10px"}}>E está no bairro que mais se desenvolveu na Capital*, com ampla estrutura de serviços, varejo e transporte.</div>
              <div className="text-line-ball"></div>
            </div>
            <div className="mapa"><div className="href-link" id="localizacao"></div></div>
            <div className="text-line">
              <div className="text-line-desc">Um ecossistema vivo e pulsante no Tatuapé.</div>
              <div className="text-line-txt" style={{top: "-10px"}}>Tudo o que a vida moderna precisa você encontra no Eixo Platina.</div>
              <div className="text-line-ball"></div>
            </div>
            <div className="ecosistema"><div className="href-link" id="eixo-platina"></div></div>
            <div className="text-line">
              <div className="text-line-desc">A 1ª fase do Eixo Platina contará com 6 empreendimentos.</div>
              <div className="text-line-txt" style={{top: "-4px"}}>A 1ª fase do Eixo Platina contará com 6 empreendimentos.</div>
              <div className="text-line-ball"></div>
            </div>
            <Slider component="empreendimento" />
            <div className="text-line portfolio-line">
              <div className="text-line-desc">O Eixo Platina é uma<br /> iniciativa da Porte.</div>
              <div className="text-line-txt" style={{top: "-30px"}}>Uma empresa com mais de 30 anos de Tatuapé, que entende as demandas do leste de São Paulo como nenhuma outra e hoje é referência em cases de sucesso na região:</div>
              <div className="text-line-ball"></div>
            </div>
            <Portfolio />
            <Footer />
        </div>
      );
    }
  }