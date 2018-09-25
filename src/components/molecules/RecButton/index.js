import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../store/actions/app';
import classNames from 'classnames';
import _ from 'lodash';
import './style.scss';

// Childs
import ButtonTimer from '../ButtonTimer/index'
import TaskInput from '../../molecules/TaskInput/index';

class RecButton extends Component {

  render() {
    const baseClass = 'rec-btn';
    const isDisabled = this.isDisabled();
    const text = this.props.app.isRecording ?
      <ButtonTimer/> : 'RECK';
    const mods = [...this.props.mods || ''];
    const classes = classNames(
      baseClass,
      _.map(mods, (mod) => `${baseClass}_${mod}`),
      this.props.className ? this.props.className : false,
      this.props.app.isRecording ? `${baseClass}_active` : false,
      isDisabled ? `${baseClass}_disabled` : false,
    );
    return (
      <div className='rec-btn__container main-header__rec-button'>
        <TaskInput />
        <button
          className={classes}
          onClick={this.onClick.bind(this)}
        >
          {text}
        </button>
      </div>
    );
  }

  isDisabled() {
    return this.props.app.currentTask.length === 0;
  }

  onClick() {
    const actions = this.props.actions;
    const app = this.props.app;
    const isDisabled = this.isDisabled();

    if (isDisabled) {
      console.warn('Insert task name'); // todo: add method to show user to fill task name
      alert('Fill task name, you bastard!');
      return false;
    }

    if (app.isRecording) {
      actions.stopRek();
      this.saveTask();
    } else {
      actions.startRek();
    }
  }

  saveTask() {
    this.props.actions.saveTask();
  }
}

const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RecButton);
