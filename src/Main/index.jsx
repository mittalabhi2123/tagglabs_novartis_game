import {Route, NavLink, HashRouter} from "react-router-dom";
import Landing from '../Landing';
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Landing}/>
      </HashRouter>
    );
  }
}
