import React, {Component, } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _map from 'lodash/map';
// import _sortBy from 'lodash/sortBy';
import moment from 'moment';
import durToStr from '../../../utils/durationToString';
import * as actions from '../../../public/actions/app';
import './style.scss';


class TaskTable extends Component {

  renderTasks() {
    const tasks = this.props.app.tasks.sort(function(x, y){
      return y.start - x.start;
    });
    const rows = _map(tasks, (task, i) => {
      const {text, start, stop} = task;
      const mStart = moment(start);
      const mStop = moment(stop);
      const startFormat = mStart.fromNow();
      const duration = moment.duration(mStop.diff(mStart));
      const time = durToStr(duration);

      return (
        <li
            className='rek-table__task'
            key={i}
        >
          <div className='rek-table__task-name'>
            {text}
          </div>
          <div className='rek-table__task-time'>
            {time}
          </div>
          <div className='rek-table__task-start'>
            {startFormat}
          </div>
        </li>
      )
    });

    return (
        <ul className='rek-table__list'>
          {rows}
        </ul>
    )
  }

  render() {
    const tasks = this.props.app.tasks;
    const rows = tasks.length ? this.renderTasks() : null; //TODO: make empty state
    return (
        <div className='rek-table'>
          {rows}
        </div>
    )
  }
}



const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);

