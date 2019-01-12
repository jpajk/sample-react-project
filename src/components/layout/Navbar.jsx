import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { apiLoginUser } from './../../actions/'
import { connect } from 'react-redux';


class Navbar extends Component {
  constructor() {
    super()

    Navbar.testLoginUser = Navbar.testLoginUser.bind(this)
  }

  render() {
    return <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="/">Offcanvas navbar</a>
      <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Notifications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Switch account</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">Settings</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <Dropdown>
          <Dropdown.Toggle className="bg-white" variant="default">
            <FontAwesome name="user"/>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={Navbar.testLoginUser}>Login</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>;
      </div>
    </nav>;
  }

  static testLoginUser() {
    this.props.onLoginUser()
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: () => {
      dispatch(apiLoginUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
