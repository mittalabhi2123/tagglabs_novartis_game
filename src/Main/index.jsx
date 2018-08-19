import {Route, NavLink, HashRouter} from "react-router-dom";
import Landing from '../Landing';
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <Container className="d-flex h-100">
          <Row className="align-items-center w-100">
            <Col>
              <Route exact path="/" component={Landing}/>
            </Col>
          </Row>
        </Container>
      </HashRouter>
    );
  }
}
