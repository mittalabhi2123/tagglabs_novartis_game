import './styles.scss';
import React, { Component, Fragment } from 'react';
import Register from '../Register';
import Games from '../Games';
import { Col, Label, Row } from 'reactstrap';
import Screen1 from '../assets/Screen1.png';
import search from '../assets/search.png';
import trophy from '../assets/trophy.png';

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 'init',
      gameNum: 0,
      gamesFinished: 0,
      score: 0,
    };
  }
  
  updateStageInState = (newStage, gameNum, email, name, empId, score) => {
    this.setState({
      stage: newStage,
      gameNum,
      gamesFinished: gameNum-1,
      email,
      name,
      empId,
      score,
    });
  }

  moveToNextGame = () => {
    this.setState(prevState => ({
      gameNum: prevState.gameNum + 1,
    }));
  }

  updateScore = (score) => {
    this.setState(prevState => ({
      score: prevState.score + score,
      gamesFinished: prevState.gameNum,
    }));
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        stage: 'register',
      });
    }, 2000);
  }

  dummy = () => 'test';

  renderView = () => {
    const firstScreenRenderer = (
      <div>
        <img src={Screen1} width="100%" style={{backgroundSize:"cover"}}/>
      </div>
    );
    switch (this.state.stage) {
      case 'init':
        return (firstScreenRenderer);
      case 'register':
        return (<Register updateStage={this.updateStageInState} />);
      case 'game':
        return (<Games gameNum={this.state.gameNum} moveToNextGame={this.moveToNextGame}
          updateScore={this.updateScore}
          email={this.state.email}
        name={this.state.name}/>);
      default:
        return null;
    }
  };

  render() {
    const statusBar = (
      <Row style={{margin:"0px", backgroundColor:"black"}}>
        <Col xs="10" />
        <Col xs="1">
          <img src={search} style={{marginLeft:"50%", width:"30%"}}/>
          <Label style={{color:"white", fontSize:"small"}}>{this.state.gamesFinished}</Label>
        </Col>
        <Col xs="1">
          <img src={trophy} style={{width:"30%"}}/>
          <Label style={{color:"white", fontSize:"small"}}>{this.state.score}</Label>
        </Col>
      </Row>
    );
    return (
      <Fragment>
          {this.state.stage === 'game' ? statusBar : ''}
          {this.renderView()}
      </Fragment>
    );
  }
}
