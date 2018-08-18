import { initAWS, register } from '../Common/helper.js';
import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import './styles.scss';
import buttonWithText from '../assets/buttonWithText.png';

const propTypes = {
  updateStage: PropTypes.func.isRequired,
};

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  registerUser = () => {
    const name = document.getElementById('name').value;
    const empId = document.getElementById('empId').value;
    const email = document.getElementById('email').value;
    if (!name || !empId || !email) {
      this.setState({
        error: 'All the fields are mandatory',
      });
      return;
    }
    initAWS();
    register(email, name, empId, this.props.updateStage);
  }

  render() {
    const error = (
      <Label style={{color:"red", fontSize:"-webkit-xxx-large"}}>{this.state.error}</Label>
    );
    return (
      <div>
        {this.state.error ? error : ''}
        <Row style={{paddingTop:"12%", paddingBottom:"2%"}}>
          <Col xs="4" />
          <Col xs="4">
            <Label style={{color:"white", fontSize:"-webkit-xxx-large"}}>#GetINSPIREady</Label>
          </Col>
          <Col xs="4" />
        </Row>
        <Row style={{paddingTop:"2%", paddingBottom:"1%"}}>
          <Col xs="5" />
          <Col xs="2">
            <Label style={{color:"#ec9a1e", fontSize:"large", textAlign: "center"}}>Scan and Win</Label>
          </Col>
          <Col xs="5" />
        </Row>
        <Row style={{paddingTop:"1%"}}>
          <Col xs="4" />
          <Col xs="4">
            <Label style={{color:"white", fontSize:"small", textAlign: "center"}}>
              Locate the elements asked for, with your phone
              camera. Earn points on finding the right<br/>
              elements and win exciting prizes.
            </Label>
          </Col>
          <Col xs="4" />
        </Row>
        <Row style={{paddingTop:"2%", paddingBottom:"1%"}}>
          <Col xs="4" />
          <Col xs="4">
            <Input type="text" name="name" id="name" placeholder="Name" />
          </Col>
          <Col xs="4" />
        </Row>
        <Row style={{paddingTop:"1%", paddingBottom:"1%"}}>
          <Col xs="4" />
          <Col xs="4">
            <Input type="text" name="empId" id="empId" placeholder="Employee Id" />
          </Col>
          <Col xs="4" />
        </Row>
        <Row style={{paddingTop:"1%", paddingBottom:"1%"}}>
          <Col xs="4" />
          <Col xs="4">
            <Input type="email" name="email" id="email" placeholder="Email" />
          </Col>
          <Col xs="4" />
        </Row>
        <Row style={{paddingTop:"1%", paddingBottom:"1%"}}>
          <Col xs="5" />
          <Col xs="2">
            <button type="button" onClick={this.registerUser} style={{backgroundColor:"transparent", borderWidth:"0px", width:"160px", height:"60px"}}>
              <img width="100%" height="70%" border-radius="12px" padding="2px" src={buttonWithText} alt=""/>
            </button>
          </Col>
          <Col xs="5" />
        </Row>
      </div>
    );
  }
}

Register.propTypes = propTypes;
