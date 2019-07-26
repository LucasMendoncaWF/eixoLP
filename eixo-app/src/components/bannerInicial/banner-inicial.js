import React, { Component } from 'react';
import './banner-inicial.scss';
import Formulario from '../formulario/formulario';
import LogoInicial from '../../images/logo-inicial.png';
import ModeloInicial from '../../images/modelo-inicial.png';
import ModeloMobile from '../../images/HOME.png';

var text = "Uma iniciativa que visa o desenvolvimento humano na Região Leste, por meio da transformação urbana.";
export default class BannerInicial extends Component {
    
    render() {
      return (
        <div className="banner-inicial">
          <div className="banner-inicial-img">
            <img className="modelo-inicio" alt="logo" src={this.props.mobile? ModeloMobile :ModeloInicial}/>
            {!this.props.mobile?<img className="logo-inicio" alt="modelo" src={LogoInicial}/>: null}
            <div className="text-inicio">Uma nova linha para futuro está sendo traçada no Leste de São Paulo.</div>
          </div>
          <div className="line"><div className="ball-top"></div></div>
          <Formulario text={text}/>
          <div className="text-line-banner">
            <div className="text-line-desc">Saiba mais sobre<br />o Eixo Platina.</div>
            <div className="text-line-ball"></div>
          </div>
        </div>
      );
    }
  }