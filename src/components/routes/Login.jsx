import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { attemptLoginUser} from "../../actions";
import { connect } from 'react-redux'

class Login extends Component {
  constructor() {
    super()

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      login: '',
      password: ''
    }
  }

  render() {
    return <main role="main">
      <Row>
        <Col xs={{span: 4, offset:4}}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="login"
                value={this.state.login}
                onChange={this.handleUserInput}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleUserInput}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>;
    </main>;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.apiLoginUser(this.state.login, this.state.password)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    apiLoginUser: (login, password) => {
      dispatch(attemptLoginUser(login, password));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
