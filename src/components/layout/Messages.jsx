import React, { Component } from 'react';
import {Row, Col, Alert} from 'react-bootstrap'
import { connect } from 'react-redux'
import { SUCCESS, ERROR } from "../../actions";
import posed, { PoseGroup } from "react-pose";

const AnimatedBox = posed.div({
  enter: { opacity: 1, transition: { duration: 1000 } },
  exit: { opacity: 0, transition: { duration: 1000 } }
})

class Messages extends Component {
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
                    {flashMessage.message}
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
}

const mapStateToProps = state => {
  return {
    flashMessages: state.messages.flashMessages,
  }
}

export default connect(mapStateToProps)(Messages);
