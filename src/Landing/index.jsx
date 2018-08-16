import { initAWS, fetchUserDataByImage } from '../Common/helper.js';
import './styles.scss';
import React, { Component, Fragment } from 'react';
import Register from '../Register';
import { Card } from 'reactstrap';
import Webcam from '../Webcam';
import PropTypes from 'prop-types';
import Screen1 from '../assets/Screen1.png';
import loading from '../assets/loading.mp4'

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initiating: true,
    };
  }

  updateBackground = () => {
    document.getElementById('root').style.backgroundImage = 'url("../assets/bg.png")';
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initiating: false,
      });
      this.updateBackground();
    }, 2000);
  }

  render() {
    const videoRenderer = (
      <div>
        {/* <video
          style={{position: "fixed", top: "80%", left: "50%", transform: "translate(-50%, -50%)"}}
          src={loading} type="video/mp4" autoPlay preload='auto' /> */}
        <img src={Screen1} height="1920px" width="1080px" left="50%" top="50%" />
      </div>
    );
    const register = (
      <div>
        <Register />
      </div>
    );
    return (
      <Fragment>
        {this.state.initiating ? videoRenderer : register}
      </Fragment>
    );
  }
}
