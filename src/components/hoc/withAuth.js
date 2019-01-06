
import React, { Component } from 'react';
import Api from '../../lib/api/Api'

const withAuth = WrappedComponent => {
  return class extends Component {
    componentWillMount() {
      Api.get().then((res) => {
        window.console.log(res) // achieved: can query api now
      })
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withAuth
