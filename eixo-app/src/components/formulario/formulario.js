import React, { Component } from 'react';
import './formulario.scss';
import InputMask from 'react-input-mask';
export default class Formulario extends Component {

  state={
    nome: null,
    email: null,
    telefone: null,
    disabledfields: false,
    buttonText: "Enviar"
  }

    callPH = (e) => {
      this.setState({disabledfields: true});

      var httpc = new XMLHttpRequest();
      
      var url = "https://" + window.location.hostname + "/php/sendformdata.php";
      var params = "nome="+ this.state.nome + "&email=" + this.state.email + "&telefone=" + this.state.telefone;
      httpc.open("POST", url, true); 

      httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      httpc.send(params);
      this.setState({buttonText: "Enviado!"});

      e.preventDefault();
    }
    
    handleChangeFieldNome =(e) =>{
      this.setState({nome: e.target.value});
    }

    handleChangeFieldMail =(e) =>{
      this.setState({email: e.target.value});
    }


    handleChangeFieldPhone =(e) =>{
      this.setState({telefone: e.target.value});
    }


    render() {
      return (
        <div className="formulario-contato" style={{display: this.props.hide? 'none': 'block'}}>
          {this.props.close?<div className="close-form" onClick={this.props.hidefunction}></div> : null}
          <form className="contato"  onSubmit={this.callPH}>
            <div className="contato-desc">{this.props.text}</div>
            <div className="campo-form">
              <label className="campo-form-label">Nome</label>
              <input className="campo-form-input" onChange={this.handleChangeFieldNome} disabled={this.state.disabledfields} type="text" required/>
            </div>
            <div className="campo-form">
              <label className="campo-form-label">E-mail</label>
              <input className="campo-form-input" onChange={this.handleChangeFieldMail} disabled={this.state.disabledfields} type="email" required/>
            </div>
            <div className="campo-form">
              <label className="campo-form-label">Telefone</label>
              <InputMask className="campo-form-input"  onChange={this.handleChangeFieldPhone} disabled={this.state.disabledfields} mask="(99) 99999-9999" required/>
            </div>
            <input type="submit" className="campo-form-submit" disabled={this.state.disabledfields} value={this.state.buttonText}/>
          </form>
        </div>
      );
    }
  }