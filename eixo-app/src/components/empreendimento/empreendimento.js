import React, { Component } from 'react';
import './empreendimento.scss';
import predio1 from '../../images/predio1.png';
import predio2 from '../../images/predio2.png';
import predio3 from '../../images/predio3.png';
import predio4 from '../../images/predio4.png';
import predio5 from '../../images/predio5.png';
//import predio6 from '../../images/predio6.png';

var predios = [
  {id:0, img: predio1, nome: "Geon 652", usos: "Office e Lojas", Unidades: "240", AreaConstruida: "18.636 m²", AreaPrivativa:"11.299 m²", Localizacao: "Rua Vilela, 652 - Tatuapé", Office: "até 42 m²", Arquitetura: "J. J. Abrão", Decoracao: "Shenia Nogueira", Paisagismo: "Nik Sabey"},
  {id:1, img: predio2, nome: "Platina 220", usos: "Residencial, Office, Corporativo, Htelaria e Lojas", Unidades: "530", AreaConstruida: "57.088 m²", AreaPrivativa:"30.700 m²" , Residenciais:"35 m², 57 m² e 70 m²", Comercial:"26 m² à 49 m²", Coorporativo:"500 m²", Hotel:"19 m² à 49 m²", Localizacao: "Rua Bom Sucesso,220 - Tatuapé", Arquitetura: " Königsberger Vannucchi", Decoracao: "Triptyque", Paisagismo: "Takeda Paisagismo e Urbanismo"},
  {id:2, img: predio3, nome: "Crona 665", usos: "Corporativo e Lojas", Unidades: "66", AreaConstruida: "22.260 m²", AreaPrivativa:"15.240 m²", Localizacao: "Rua Vilela, 665 - Tatuapé", Coorporativo: "800 m²", Arquitetura: "Andrade Morettin Arquitetos", Decoracao: "Andrade Morettin Arquitetos", Paisagismo: "Benedito Abud"},
  {id:3, img: predio4, nome: "Itapura", usos: "Residencial, Corporativo, Co-Working e Lojas", Unidades: "409", AreaConstruida: "66.220 m²", AreaPrivativa:"41.210,76 m²", Localizacao: "Rua Airi, 227 - Tatuapé", Residencial: "20 m² a 980 m²", Corporativo: "900 m²", CoWorking: "4.500 m²",Arquitetura: "Königsberger Vannucchi", Paisagismo: "EKF"},
  {id:4, img: predio5, nome: "Metria 624", Unidades: "183", AreaConstruida: "38.894 m²", AreaPrivativa:"22.796 m²", Localizacao: "Rua Vilela, 694 - Tatuapé", Arquitetura: "Königsberger Vannucchi"},
  {id:5, img: null, nome: "Radial 3", usos: "Centro de Convenções, Saúde, Cinema e Teatro", AreaConstruida: "141.534 m²", AreaPrivativa:"78.428 m²", Arquitetura: "Aflalo Gasperini"}
];

function detectmob() { 
  if(window.innerWidth <= 1024 && window.innerHeight <= 1024) {
    return true;
  } else {
    return false;
  }
 }

export default class Empreendimento extends Component {

  state={
    show: false,
    mobile: detectmob()
  }

  showMobile = ()=>{
    this.setState({show:true});
  }

  hideMobile = ()=>{
    this.setState({show:false});
  }


  componentDidMount() {
    this.props.setMax(predios[predios.length -1].id);
 }

    getCurrentEmpreendimento = () =>{
      for(var predio of predios){
        if(predio.id === this.props.idCurrent){
          return (
            <div className="empreendimento">
              {predio.img?<div className="empreendimento-img"><img alt="" src={predio.img}/></div> : null}
              <div className="empreendimento-info" style={{display: (this.state.mobile && !this.state.show)? "none" : "block"}}>
              <div className="close-empreendimento" onClick={this.hideMobile}></div>
                {predio.nome? <div className="predio-nome">{predio.nome}</div> : null}
                {predio.usos? <div className="predio-info"><span className="info-title">Usos: </span>{predio.usos}</div> : null}
                {predio.Unidades? <div className="predio-info"><span className="info-title">Unidades: </span>{predio.Unidades}</div> : null}
                {predio.AreaConstruida? <div className="predio-info"><span className="info-title">Área Construída: </span>{predio.AreaConstruida}</div> : null}
                {predio.AreaPrivativa? <div className="predio-info"><span className="info-title">Área Total Privativa: </span>{predio.AreaPrivativa}</div> : null}
                {predio.Localizacao? <div className="predio-info"><span className="info-title">Localização: </span>{predio.Localizacao}</div> : null}
                {predio.Office? <div className="predio-info"><span className="info-title">Office: </span>{predio.Office}</div> : null}
                {predio.Residenciais? <div className="predio-info"><span className="info-title">Residenciais: </span>{predio.Residenciais}</div> : null}
                {predio.Comercial? <div className="predio-info"><span className="info-title">Comercial: </span>{predio.Comercial}</div> : null}
                {predio.Corporativo? <div className="predio-info"><span className="info-title">Corporativo: </span>{predio.Corporativo}</div> : null}
                {predio.CoWorking? <div className="predio-info"><span className="info-title">Co-Working: </span>{predio.CoWorking}</div> : null}
                {predio.Arquitetura? <div className="predio-info"><span className="info-title">Arquitetura: </span>{predio.Arquitetura}</div> : null}
                {predio.Decoracao? <div className="predio-info"><span className="info-title">Decoração: </span>{predio.Decoracao}</div> : null}
                {predio.Paisagismo? <div className="predio-info"><span className="info-title">Paisagismo: </span>{predio.Paisagismo}</div> : null}
              </div>
              <div className="empreendimento-mobile">
                {predio.nome}
                <div className="empreendimento-mobile-button" onClick={this.showMobile}>+</div>
              </div>
            </div>
          )       
        }
      }
    }
    
    render() {
      return (
        <div className="empreendimento-area">
          <div className="href-link" id="produtos"></div>
          {this.getCurrentEmpreendimento()}
       </div>
      );
    }
  }