import {ButtonToolbar, Button,Modal} from 'react-bootstrap'; 
import React, { Component } from 'react';

class ModalReact extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: true
      };
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    handleHide() {
      console.log("hide");
      var hidenow=false;
      this.setState({ show: hidenow });
      console.log("ss",hidenow)
      
  
    }
  
    render() {
     
      return (
        // <ButtonToolbar>
        //   <Button bsStyle="primary" onClick={this.handleShow}>
        //     Launch demo modal
        //   </Button>
  
          <Modal
            {...this.props}
            show={this.props.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
           
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
            
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        // </ButtonToolbar>
      );
    }}
  
  
 export default ModalReact;