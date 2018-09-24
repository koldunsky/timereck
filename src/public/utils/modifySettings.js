import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { bindActionCreators } from 'redux';
import { modify } from '../actions/app';

export default function(ChildComponent) {
  class ModifySettings extends Component {
    constructor() {
      super();

      ChildComponent.prototype.componentWillMount = ChildComponent.prototype.componentWillMount || function() {};
    }

    modify() {
      this.settings = ChildComponent.pageSettings;
      if(!isEmpty(this.settings)) {
        this.props.modify(this.settings);
      }
    }

    componentWillMount() {
      ChildComponent.prototype.componentWillMount.call(ChildComponent);

      this.modify();
    }

    render() {
      return <ChildComponent />
    }
  }

  const mapDispatchToProps = dispatch => ({
    modify: bindActionCreators(modify, dispatch)
  });

  return connect(undefined, mapDispatchToProps)(ModifySettings);
}