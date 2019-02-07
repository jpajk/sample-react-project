import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { SUCCESS, ERROR, apiLoginUser, clearMessage } from "../../actions";
import posed, { PoseGroup } from "react-pose";

const AnimatedBox = posed.div({
  enter: { opacity: 1, transition: { duration: 1000 } },
  exit: { opacity: 0, transition: { duration: 1000 } }
})

class Messages extends Component {
  constructor() {
    super()

    this.clearMessages = this.clearMessages.bind(this)
  }

  render() {
    return <Row className="messages-top">
      <Col xs={{span: 4, offset:4}}>
        <PoseGroup>
          {this.props.flashMessages.map((flashMessage, i) => {
            switch(flashMessage.type) {
              case SUCCESS:
                return <AnimatedBox key={i}>
                  <Alert variant="success">
                    {flashMessage.message}
                  </Alert>
                </AnimatedBox>;
              case ERROR:
                return <AnimatedBox key={i}>
                  <Alert variant="danger">
                    <Row>
                      <Col xs={{span: 6 }}>
                        {flashMessage.message}
                      </Col>
                      <Col xs={{span: 6 }} className="text-right">
                        <i style={{cursor: 'pointer'}} className="fa fa-fw fa-times" onClick={this.clearMessages} />
                      </Col>
                    </Row>
                  </Alert>
                </AnimatedBox>;
              default:
                return null
            }
          })}
        </PoseGroup>
      </Col>
    </Row>;
  }

  clearMessages() {
    this.props.clearMessage()
  }
}

const mapStateToProps = state => {
  return {
    flashMessages: state.messages.flashMessages,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearMessage: () => {
      dispatch(apiLoginUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
