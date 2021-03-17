import React, { Component } from 'react'
import classes from './Modal.css'
import BackDrop from '../BackDrop/BackDrop'
import Aux from '../../../hoc/Auxaliary'





class Modal extends Component {


  shouldComponentUpdate(nextProps, nextState){

    
      return nextProps.show !== this.props.show;

     
  }

  componentDidUpdate(){
    console.log('[modal]')
  }

  render(){

    return(
      <Aux>
      <BackDrop show={this.props.show} clicked={this.props.purchasingCancel}/>
  
      <div className={classes.Modal}
      style={{
         transform: this.props.show ? 'translateY(0)' : 'translateY(-100VH)',
         opacity: this.props.show ? '1' : '0'
      }}>
        {this.props.children}
      </div>
    </Aux>
    )
  }
} 

export default Modal;