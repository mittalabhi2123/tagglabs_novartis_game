import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import timer from '../assets/321.gif'

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
      <Container className="d-flex" id="game-cont">
        <Row className="align-items-center w-100">
          <Col>
            <img src={timer} />
          </Col>
        </Row>
      </Container>
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
