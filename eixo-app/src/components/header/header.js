import React, { Component } from 'react';
import './header.scss';
import Logo from '../../images/logo.svg';
import Formulario from '../formulario/formulario';

var text = "Preencha os dados e receba mais informações sobre o Eixo Platina.";
export default class Header extends Component {

  state = {
    hideFormState: true,
    showMobileMenu: false
  }
    
  showForm = ()=>{
    this.setState({hideFormState: false});
    this.hideMenu();
  }

  hideForm = ()=>{
    this.setState({hideFormState: true});
  }

  showMenu = ()=>{
    this.setState({showMobileMenu: true});
  }

  hideMenu=()=>{
    this.setState({showMobileMenu: false});
  }

    render() {
      return (
        <div className="header">
            <a href="/" className="logo-link" >
                <img className="logo-img" alt="logo" src={Logo}/>
            </a>
            <div className="hamburger-menu" onClick={this.showMenu}>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
            {(!this.props.mobile || this.state.showMobileMenu) ?(<div className="links-header">
                <div className="close-menu" onClick={this.hideMenu}></div>
                <a href="/#oportunidades" onClick={this.hideMenu}><div className="link-header">Oportunidades</div></a>
                <a href="/#desenvolvimento-humano" onClick={this.hideMenu}><div className="link-header">Desenvolvimento humano</div></a>
                <a href='/#localizacao' onClick={this.hideMenu}><div className="link-header">localização</div></a>
                <a href="/#eixo-platina" onClick={this.hideMenu}><div className="link-header">eixo platina</div></a>
                <a href="/#produtos" onClick={this.hideMenu}><div className="link-header">produtos</div></a>
                <a href="/#porte" onClick={this.hideMenu}><div className="link-header">a porte</div></a>
                <div onClick={this.showForm} className="link-header contato">contato</div>
            </div>): null}
            <Formulario hidefunction={this.hideForm} hide={this.state.hideFormState} close={true} text={text}/>
        </div>
      );
    }
  }