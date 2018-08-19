import './styles.scss';
import React, { Component, Fragment } from 'react';
import { Row, Col, Label } from 'reactstrap';
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
      <div>
        {<video width="100%"
          src={timerVideo} type="video/mp4" autoPlay preload='auto' />}
      </div>
    );
    const frameRenderer = (
      <div>
        <div style={{position:"absolute", top:"45%", left:"30%"}}>
          <Row>
            <Col xs="4"/>
            <Col xs="8"><Label style={{color:"white", fontSize:"-webkit-xxx-large", textAlign: "center"}}>
              {this.props.item && 'Find'}
            </Label></Col>
          </Row>
          <Row>
            <Col><Label style={{color:"white", fontSize:"-webkit-xxx-large", textAlign: "center"}}>
              {this.props.item ? this.props.item.Name : ''}
            </Label></Col>
          </Row>
        </div>
      </div>
    );
    return (
      <Fragment>
        {this.state.initiating ? frameRenderer : videoRenderer}
      </Fragment>
    );
  }
}

SearchItem.propTypes = propTypes;
