import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import timerVideo from '../assets/321.mp4'

const propTypes = {
  item: PropTypes.object.isRequired,
};

export default class SearchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initiating: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initiating: false,
      });
    }, 6000);
  }

  render() {
    const videoRenderer = (
      <div id="game-cont">
        <video src={timerVideo} type="video/mp4" autoPlay preload='auto' />
      </div>
    );
    const frameRenderer = (
      <Container className="d-flex" id="game-cont">
        <Row className="align-items-center w-100">
          <div id="find-box">
            <div>
              <h1>{this.props.item ? 'Find ' + this.props.item.Name : ''}</h1>
            </div>
          </div>
        </Row>
      </Container>
    );
    return (
      <Fragment>
        {this.state.initiating ? frameRenderer : videoRenderer}
      </Fragment>
    );
  }
}

SearchItem.propTypes = propTypes;
