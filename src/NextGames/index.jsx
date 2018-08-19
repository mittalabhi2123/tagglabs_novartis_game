import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import nextButton from '../assets/nextButton.png';
import finish from '../assets/finish.png';

const propTypes = {
  moveToNextGame: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  gameNum: PropTypes.number.isRequired,
};

const NUM_GAMES = 9;
export default class NewGames extends Component {

  constructor(props) {
    super(props);
    this.state = {
      finishGame: false,
    };
  }

  nextGame = () => {
    if (this.props.gameNum === NUM_GAMES) {
      this.setState({
        finishGame: true,
      })
    }
    else {
      this.props.moveToNextGame();
    }
  }

  render() {
    const gameMessage = (
      <Container className="d-flex h-100" id="register-cont">
        <Row className="align-items-center w-100">
          <Col>
            <Container>
              <Row>
                <Col className="text-center">
                  {
                    this.props.message.split('<br/>').map(
                      part => (
                        <p>
                          {part}
                        </p>
                      )
                    )
                  }
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button color="warning" className="btn-lg" onClick={this.nextGame}>{this.props.gameNum === NUM_GAMES ? "Finish" : "Next"}</Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
    const byebye = (
      <div>
        <Row style={{paddingTop:"12%", paddingBottom:"2%"}}>
          <Col xs="4" />
          <Col xs="4">
            <Label style={{color:"white", fontSize:"-webkit-xxx-large"}}>Congratulations!</Label>
          </Col>
          <Col xs="4" />
        </Row>
        <Row>
          <Col xs="4" />
          <Col xs="4">
            <Label style={{color:"white", fontSize:"x-large", paddingLeft: "6%"}}>
              You have successfully
            </Label>
          </Col>
          <Col xs="4" />
        </Row>
        <Row>
          <Col xs="4" />
          <Col xs="4">
            <Label style={{color:"white", fontSize:"x-large", paddingLeft: "6%"}}>
              completed the activity
            </Label>
          </Col>
          <Col xs="4" />
        </Row>
        <Row>
          <Col xs="4" />
          <Col xs="4">
            <Label style={{color:"white", fontSize:"x-large"}}>
              Look out for exciting prizes.
            </Label>
          </Col>
          <Col xs="4" />
        </Row>
      </div>
    );
    return (
      <Fragment>
        {this.state.finishGame ? byebye : gameMessage}
      </Fragment>
    );
  }
}
NewGames.propTypes = propTypes;
