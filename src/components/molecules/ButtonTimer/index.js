import React, {Component, } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/app';
import moment from 'moment'; //todo: remove moment!
import durToStr from '../../../utils/durationToString';
import './style.scss';


class ButtonTimer extends Component {
  constructor() {
    super();
    this.state = {
        workingTime: false,
    };
    this.updatefnId = null;
  }
  render() {
    const baseClass='rek-timer';
    const classes = classNames(
      baseClass,
      this.props.className ? this.props.className : false,
      this.props.app.isRecording ? `${baseClass}_active` : false,
    );

    // console.info(this.props.app.isRecording && this.props.app.startTime);
    if(this.state.workingTime === false) {
      this.startCount.bind(this)();
    }

    const time = moment.duration(this.state.workingTime);
    const timerText = durToStr(time);

    // update doc title
    document.title = durToStr(time, true);

    return (
        <span className={classes}>
          {timerText}
        </span>
    );
  }

  startCount() {
    const component = this;
    this.updatefnId = setInterval(()=>{
      const startTime = moment(this.props.app.startTime);
      component.setState(
          {
            ...component.state,
            workingTime: moment().diff(startTime)
          }
      );
      // console.info(moment().diff(startTime));
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.updatefnId);
    this.props.actions.reset(); // TODO make reset method
  }
}



const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonTimer);

