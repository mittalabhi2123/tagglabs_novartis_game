import './styles.scss';
import React, { Component, Fragment } from 'react';
import { Row, Col, Label } from 'reactstrap';
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
      <div style={{position:"absolute", top:"100%", left:"30%"}}>
        {this.props.message.split('<br/>').map(part => (
            <Row>
              <Label style={{color:"white", fontSize:"xx-large", marginLeft: "-10%"}}>
                {part}
              </Label>
            </Row>
          ))}
        <Row>
          <button type="button" onClick={this.nextGame}
            style={{backgroundColor:"transparent", borderWidth:"0px", width:"160px", height:"60px"}}>
            <img width="100%" height="70%" border-radius="12px" padding="2px" src={this.props.gameNum === NUM_GAMES ? finish : nextButton} alt=""/>
          </button>
        </Row>
      </div>
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
