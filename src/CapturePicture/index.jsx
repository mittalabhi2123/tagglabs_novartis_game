import { initAWS, fetchUserDataByImage } from '../Common/helper.js';
import React, { Component, Fragment } from 'react';
import { Card } from 'reactstrap';
import Webcam from '../Webcam';
import PropTypes from 'prop-types';


const propTypes = {
  updateState: PropTypes.func.isRequired,
  event: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default class CapturePicture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      foundImageMatch: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.startTimer();
  }

  stopTimer = () => {
    console.log("Timer stopped....");
    clearInterval(this.timer);
  }

  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    if (screenshot === null) {
      return;
    }
    initAWS();
    fetchUserDataByImage(screenshot, this.props.updateState, this.stopTimer, this.props.event, this.props.email);
    this.setState({ screenshot });
  }

  startTimer = () => {
    console.log("Timer started....");
    clearInterval(this.timer)
    this.timer = setInterval(this.handleClick, 3000)
  }

  render() {
    return (
      <Fragment>
        <Card style={{position:"absolute", bottom:"1%", top:"10%", left:"25%"}}>
          <Webcam
            style={{objectFit:"fill", width:"100%", height:"100%"}}
            audio={false}
            ref={node => this.webcam = node}
          />
        </Card>
      </Fragment>
    );
  }
}


CapturePicture.propTypes = propTypes;
