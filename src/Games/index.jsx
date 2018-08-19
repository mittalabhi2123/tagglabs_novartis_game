import { fetchSearchItems } from '../Common/helper.js';
import { getEventMessage } from '../Common/util.js'
import React, { Component, Fragment } from 'react';
import SearchItem from '../SearchItem';
import CapturePicture from '../CapturePicture';
import NextGames from '../NextGames';
import PropTypes from 'prop-types';

const propTypes = {
  updateScore: PropTypes.func.isRequired,
  moveToNextGame: PropTypes.func.isRequired,
  gameNum: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default class Games extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: {},
      initiating: true,
      gameOver: false,
    };
    fetchSearchItems(this.updateState);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initiating: false,
      });
    }, 11000);
  }

  analyzeImage = (isMatched, score) => {
    this.setState({
      gameOver: isMatched,
    });
    this.props.updateScore(score);
  }

  promoteGame = () => {
    this.setState({
      initiating: true,
      gameOver: false,
    });
    this.props.moveToNextGame();
    setTimeout(() => {
      this.setState({
        initiating: false,
      });
    }, 11000);
  }

  updateState = (eventData) => {
    const newEvents = {};
    eventData.Items.forEach(item => {
      newEvents[item.Sequence.N] = {
          EventId: item.EventId.S,
          Name: item.Name.S,
          Message: getEventMessage(item.EventId.S),
        };
    });
    this.setState({
      events: newEvents,
    });
  }

  render() {
    const item = this.state.events[this.props.gameNum];
    const cam = (<CapturePicture updateState={this.analyzeImage} event={item ? item.EventId : ''} email={this.props.email}/>);
    const load = (<SearchItem item={item} />);
    const messageScreen = (<NextGames message={item ? item.Message : ''} moveToNextGame={this.promoteGame} gameNum={this.props.gameNum} />)
    return (
      <Fragment>
        {this.state.initiating ? load: this.state.gameOver ? messageScreen : cam}
      </Fragment>
    );
  }
}
Games.propTypes = propTypes;
