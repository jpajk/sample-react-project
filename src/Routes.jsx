import React, {Component} from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Login from "./components/routes/Login";

class Routes extends Component {
  render() {
    return <div>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </div>
  }
}

export default Routes;
