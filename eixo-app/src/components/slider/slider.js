import React, { Component } from 'react';
import './slider.scss';
import Empreendimento from '../empreendimento/empreendimento';
import Oportunidades from '../oportunidades/oportunidades';
import DiferenciaisSlider from '../diferenciais-slider/diferenciais-slider';
export default class Slider extends Component {

  state ={
    currentId : 0,
    maxId: 0
  }

  aumentaId = () =>{
    if(this.state.currentId < this.state.maxId)
    this.setState({currentId: this.state.currentId + 1});
  }

  diminuiId = () =>{
    if(this.state.currentId > 0)
    this.setState({currentId: this.state.currentId - 1});
  }

  setMaxId = (id) =>{
    this.setState({maxId: id});
  }

  setCurrentId = (e) =>{
    console.log(e.target.getAttribute('idball'));
    this.setState({currentId: parseInt(e.target.getAttribute('idball'))});
  }

  setBallsQtd = () =>{
    var balls = [];
    for(var b = 0; b < this.state.maxId + 1; b++){
      var active = false;
      if(b === this.state.currentId){
        active = true;
      }
        balls.push(<div className={"ball " + (active? "ativo" : "")} onClick={this.setCurrentId} key={b} idball={b}> <div idball={b} className="inner-ball"></div></div>)
    }
    return balls;
  }
    
    render() {
      return (
        <div className="slider">
        {this.state.currentId !== 0?<div className="left-arrow" onClick={this.diminuiId}></div>: null}
        {this.state.maxId !== this.state.currentId?<div className="right-arrow" onClick={this.aumentaId}></div>: null}
        {this.props.component === 'empreendimento'? 
        <Empreendimento setMax={this.setMaxId} idCurrent={this.state.currentId}/>
        :(this.props.component=== 'diferenciais'? <DiferenciaisSlider setMax={this.setMaxId} idCurrent={this.state.currentId}/>:
        <Oportunidades setMax={this.setMaxId} idCurrent={this.state.currentId}/>)
        }
        <div className="slider-balls">
          {this.setBallsQtd()}
        </div>
       </div>
      );
    }
  }