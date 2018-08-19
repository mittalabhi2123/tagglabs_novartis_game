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
      <Container className="d-flex" id="game-cont">
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
                  <p><Button color="warning" className="btn-lg" onClick={this.nextGame}>{this.props.gameNum === NUM_GAMES ? "Finish" : "Next"}</Button></p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
    const byebye = (
      <Container className="d-flex h-100" id="game-cont">
        <Row className="align-items-center w-100">
          <Col>
            <Container>
              <Row>
                <Col className="text-center">
                  <h4>Congratulations!</h4>
                  <p>You have successfully completed the activity</p>
                  <p>Look out for exciting prizes.</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
    return (
      <Fragment>
        {this.state.finishGame ? byebye : gameMessage}
      </Fragment>
    );
  }
}
NewGames.propTypes = propTypes;
