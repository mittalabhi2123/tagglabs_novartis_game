import { initAWS, register } from '../Common/helper.js';
import React, { Component } from 'react';
import { Row, Col, Label, Input, Alert, Container, Form, FormGroup, Button } from 'reactstrap';
import PropTypes from 'prop-types';

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
      <Alert color="danger">
        <h4 className="alert-heading">There was an error!</h4>
        <p className="mb-0">{this.state.error}</p>
      </Alert>
    );
    return (
      <Container className="d-flex h-100" id="register-cont">
        <Row className="align-items-center w-100">
          <Col>
            <Container>
              <Row>
                <Col className="text-center">
                  <h4>#GetINSPIREady</h4>
                  <h5 className="text-warning">Scan and Win!</h5>
                  <p>
                    Locate the elements asked for, with your phone camera. Earn points on finding the right elements and win exciting prizes.
                  </p>
                </Col>
              </Row>
              {this.state.error ? error : ''}
              <Row>
                <Col />
                <Col sm={6} className="text-center">
                  <Form>
                    <FormGroup>
                      <Input type="text" name="name" id="name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="text" name="empId" id="empId" placeholder="Employee Id" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <Button color="warning" className="btn-lg" onClick={this.registerUser}>Let's Try</Button>
                  </Form>
                </Col>
                <Col />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

Register.propTypes = propTypes;
