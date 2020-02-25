import React, { useState } from 'react';
import { render } from "react-dom";
import { Button } from 'reactstrap';
import Tabs from './Tabs';
import { Modal, ModalHeader, ModalBody, ModalFooter,Container,Row,Col} from 'reactstrap';
require('./styles.css');

class App extends React.Component{

constructor()
{
  super();
  this.state={
   modal:false
  }
}

toggle=()=>{
 this.setState({
   modal:!this.state.modal
 })

}
render()
{

  return (
     <Container>
      <Row>
      <Col sm="3">
      <h1>Admin page</h1>
      </Col>
      <Col sm={{"size":3,offset:5}} style={{marginTop:6}}>
      <Button color="warning" onClick={this.toggle}>Add Product</Button>
      </Col>
      </Row>
      <Tabs>
      <div label="New order">
        order id::
        <Button color="warning" onClick={this.toggle}> view</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
        <ModalHeader toggle={this.toggle}> order id</ModalHeader>
        <ModalBody>
        order details
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Accept</Button>{' '}
          <Button color="secondary">Reject</Button>
        </ModalFooter>
      </Modal>
        
      </div>
      <div label="Ongoing order">
        order id:: 
        <Button color="warning">{buttonLabel} view</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
        <ModalHeader toggle={this.toggle}> order id</ModalHeader>
        <ModalBody>
        order details
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Track details</Button>{' '}
          <Button color="secondary" onClick={toggle}>Contact</Button>
        </ModalFooter>
      </Modal>
      </div>
      <div label="Completed order">   
      order id:: 
      <Button color="warning" onClick={toggle}>{buttonLabel} done</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}> order id</ModalHeader>
      <ModalBody>
      order details
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}> FeedBAck</Button>{' '}
      </ModalFooter>
    </Modal>
      </div>
    </Tabs>
    
     </Container>
  );
}
  }
export default App;