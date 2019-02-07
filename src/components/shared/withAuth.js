
import React, { Component } from 'react';
import Api from '../../lib/api/Api'
import { connect } from 'react-redux'
import { error } from "../../actions";

const withAuth = WrappedComponent => {
  const mapDispatchToProps = dispatch => {
    return {
      flashError: message => {
        dispatch(error(message));
      }
    };
  };

  return connect(null, mapDispatchToProps)(class extends Component {
      componentWillMount() {
        Api.get('users/current-user').then((res) => {
          if (!res.user) {
            this.props.flashError('Please log in')
            this.props.history.push('login')
          }
        })
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  )
}

export default withAuth
