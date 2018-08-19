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
    }, 2000);
  }

  render() {
    const videoRenderer = (
      <video width="100%" src={timerVideo} type="video/mp4" autoPlay preload='auto' />
    );
    const frameRenderer = (
      <Container className="d-flex h-100" id="game-cont">
        <Row className="align-items-center w-100">
          <Col>
            <Container>
              <Row>
                <Col className="text-center">
                  <h3 class="display-3">{this.props.item ? 'Find ' + this.props.item.Name : ''}</h3>
                </Col>
              </Row>
            </Container>
          </Col>
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
