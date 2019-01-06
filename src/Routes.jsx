import React, {Component} from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/routes/Home";

class Routes extends Component {
  render() {
    return <div>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/*<Route path="/about" component={About} />*/}
        </div>
      </Router>
    </div>
  }
}

export default Routes;
