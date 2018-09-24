import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function (ChildComponent) {
  class RequireAuth extends Component {
    static propTypes = {
      isAuthorized: PropTypes.bool.isRequired,
      onError: PropTypes.func
    };

    componentWillMount() {
      this.checkAuth();
    }

    render() {
    }
  }

  const mapStateToProps = state => ({
    isAuthorized: state.auth.isAuthorized
  });

  return connect(mapStateToProps)(RequireAuth);
}