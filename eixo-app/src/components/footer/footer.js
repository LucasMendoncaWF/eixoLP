import React, { Component } from 'react';
import './footer.scss';
import Facebook from '../../images/FACEBOOK.png';
import Instagram from '../../images/INSTAGRAM.png';
import Linkedin from '../../images/LINKEDIN.png';
import Google from '../../images/GOOGLE+.png';
import Youtube from '../../images/YOUTUBE.png';
import Porte from '../../images/PORTE.png';
export default class Footer extends Component {
    
    render() {
      return (
        <div className="footer">
          <img alt="logo" src={Porte} className="logo-porte" />
          <div className="sociais">
            <img alt="facebook" src={Facebook}/>
            <img alt="instagram" src={Instagram}/>
            <img alt="linkedin" src={Linkedin}/>
            <img alt="google+" src={Google}/>
            <img alt="youtube" src={Youtube}/>
          </div>
          <div className="colunas">
            <div className="coluna">
              <div className="coluna-title">Sobre a porte</div>
              <div className="coluna-link">A prote</div>
              <div className="coluna-link">Eixo Platina</div>
              <div className="coluna-link">Empreendimentos</div>
              <div className="coluna-link">Espaço Platina</div>
              <div className="coluna-link">Prêmios</div>
              <div className="coluna-link">Built to Suit</div>
              <div className="coluna-link">Urbanismo</div>
              <div className="coluna-link">Diferenciais</div>
              <div className="coluna-link">Imprensa</div>
              <div className="coluna-link">Política de Uso</div>
              <div className="coluna-link">Política de Qualidade</div>
              <div className="coluna-link">Política de Privacidade</div>
            </div>
            <div className="coluna">
              <div className="coluna-title">Fale com a porte</div>
              <div className="coluna-link">Entre em contato</div>
              <div className="coluna-link">Seja um Corretor</div>
              <div className="coluna-link">Fale com o Corretor</div>
              <div className="coluna-link">Oferda da Área</div>
            </div>
            <div className="coluna">
              <div className="coluna-title">outros</div>
              <div className="coluna-link">Espaço do Corretor</div>
              <div className="coluna-link">Meu Porte</div>
            </div>
          </div>
        </div>
      );
    }
  }