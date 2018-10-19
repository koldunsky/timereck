import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../store/actions/app';
import classNames from 'classnames';
import _ from 'lodash';
import './style.scss';

// Children
import ButtonTimer from '../ButtonTimer/index'

class RecButton extends Component {

  render() {
    const baseClass = 'rec-btn';
    const text = this.props.app.isRecording ?
      <ButtonTimer/> : 'RECK';
    const mods = [...this.props.mods || ''];
    const classes = classNames(
      baseClass,
      _.map(mods, (mod) => `${baseClass}_${mod}`),
      this.props.className,
      this.props.app.isRecording && `${baseClass}_active`,
      this.props.app.taskLoaded && `${baseClass}_inactive`
    );
    return (
      <div className='rec-btn__container main-header__rec-button'>
        <button
          className={classes}
          onClick={this.onClick.bind(this)}
          autoFocus={true}
        >
          {text}
        </button>
      </div>
    );
  }

  onClick() {
    const actions = this.props.actions;
    const app = this.props.app;

    if (app.isRecording) {
      actions.stopRek();
      this.saveTask();
    } else {
      actions.loadTask();
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
