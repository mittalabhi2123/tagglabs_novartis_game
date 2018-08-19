import {Route, NavLink, HashRouter} from "react-router-dom";
import Landing from '../Landing';
import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Landing}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
