import React, { Component, Fragment } from 'react';
import Register from '../Register';
import Games from '../Games';
import { Col, Label, Row, Container } from 'reactstrap';
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
      <Container className="d-flex h-100">
        <Row className="align-items-center w-100">
          <Col>
            <h4 className="text-center">#GetINSPIREady</h4>
          </Col>
        </Row>
      </Container>
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
      <div id="status_bar" class="w-100 text-right">
        <img src={search} /> {this.state.gamesFinished}
        <img src={trophy} /> {this.state.score}
      </div>
    );
    return (
      <Fragment>
          {this.state.stage === 'game' ? statusBar : ''}
          {this.renderView()}
      </Fragment>
    );
  }
}
