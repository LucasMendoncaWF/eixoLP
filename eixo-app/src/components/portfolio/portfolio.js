import React, { Component } from 'react';
import './portfolio.scss';
import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import p4 from '../../images/p4.png';
import p5 from '../../images/p5.png';
import p1b from '../../images/p1-big.png';
import p2b from '../../images/p2-big.jpg';
import p3b from '../../images/p3-big.png';
import p4b from '../../images/p4-big.jpg';
import p5b from '../../images/p5-big.jpg';
export default class Portfolio extends Component {

  state ={
    zoom: false,
    currentZoom: null,
    descZoom: null
  }

  defineZoom = (e) => {
    this.setState({zoom: true, currentZoom: e.target.getAttribute('zoom'), descZoom: e.target.getAttribute('desc')});
  }

  hideZoom = () =>{
    this.setState({zoom: false});
  }
    
    render() {
      return (
        <div className="portfolio">
          <div className="href-link" id="porte"></div>
          <div className="porfolio-imgs">
            <div className="portfilio-img img-meio"><img alt="portfolio-item" src={p1} desc="" zoom={p1b} onClick={this.defineZoom} /><div className="lupa"></div></div>
            <div className="portfilio-img img-meio left-size"><img alt="portfolio-item" desc="Hospital São Luiz Anália Franco" zoom={p2b} onClick={this.defineZoom} src={p2} /><div className="lupa"></div></div>
            <div className="portfilio-img img-full"><img alt="portfolio-item" src={p3} desc="" zoom={p3b} onClick={this.defineZoom} /><div className="lupa"></div></div>
            <div className="portfilio-img img-meio"><img alt="portfolio-item" src={p4} desc="Métria 624" zoom={p4b} onClick={this.defineZoom} /><div className="lupa"></div></div>
            <div className="portfilio-img img-meio left-size"><img alt="portfolio-item" desc="Platina 220" zoom={p5b} onClick={this.defineZoom} src={p5} /><div className="lupa"></div></div>
        </div>
        <div className="portfolio-text">
                  <span className="portfolio-title">Sainte Claire</span>: unidades residenciais de 625 m²,
          com 9 vagas
          <br/>
          <br/>
          <span className="portfolio-title">Composite</span>: unidades residenciais de 55 m²,
          com 2 vagas
          <br/>
          <br/>
          <span className="portfolio-title">Geon 652 e Bernini</span>: unidades comerciais de 40 m²
          <br/>
          <br/>
          <span className="portfolio-title">Platina 220</span>: corporativo, comercial, residencial, hotel
          e lojas em um inédito empreendimento.
          <br/>
          <br/>
          <span className="portfolio-title">Hospital São Luiz Anália
          Franco</span>: projeto built to suit
          para a Rede D’Or

        </div>
        {this.state.zoom?<div className="big-image">
          <div onClick={this.hideZoom} className="close-big">
          </div><img alt="big-zoom" src={this.state.currentZoom}/>
          <div className="descricao">{this.state.descZoom}</div>
        </div>:null}
       </div>
      );
    }
  }