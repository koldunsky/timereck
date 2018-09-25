import createReducer from 'create-redux-reducer';
import moment from 'moment';
import Task from '../../constructors/task';
import * as c from '../../constants/app';
const initialState = {
  title: 'TIMEREK — Your personal time-reckoner',
  main: '',
  wrapper: '',
  isRecording: false,
  startTime: false,
  currentTime: false,
  currentTask: '',
  stopTime: false,
  tasks: [
    {
      text: 'Apple',
      start: parseInt(moment('2016-12-20 02:34:04').format('x'), 10),
      stop: parseInt(moment('2017-01-31 00:00:00').format('x'), 10),
    },
    {
      text: 'Banana',
      start: parseInt(moment('2017-01-30').format('x'), 10),
      stop: parseInt(moment('2017-01-31').format('x'), 10),
    },
    {
      text: 'Cherry',
      start: parseInt(moment('2017-01-30').format('x'), 10),
      stop: parseInt(moment('2017-01-31').format('x'), 10),
    },
    {
      text: 'Grapefruit',
      start: parseInt(moment('2017-01-30').format('x'), 10),
      stop: parseInt(moment('2017-01-31').format('x'), 10),
    },
    {
      text: 'Lemon',
      start: parseInt(moment('2017-01-30').format('x'), 10),
      stop: parseInt(moment('2017-01-31').format('x'), 10),
    }
  ],
};

export default createReducer(initialState, {
  [c.MODIFY]: (state, payload) => ({
    ...state, ...payload
  }),

  [c.START_REK]: (state, payload) => ({
    ...state,
    isRecording: true,
    startTime: payload,
  }),

  [c.STOP_REK]: (state, payload) => ({
    ...state,
    isRecording: false,
    stopTime: payload,
  }),

  [c.UPDATE_TIME]: (state, payload) => ({
    ...state,
    currentTime: payload
  }),

  [c.UPDATE_TASK_NAME]: (state, payload) => ({
    ...state,
    currentTask: payload
  }),

  [c.ADD_TASK]: (state) => {
    const tasks = state.tasks;
    const task = new Task();
    task.text = state.currentTask;
    task.start = state.startTime;
    task.stop = state.stopTime;
    tasks.push(task);
    return {
      ...state,
      tasks
    }
  },

  [c.IMPORT_TASKS]: (state, payload) => {
    return {
      ...state,
      tasks: payload
    }
  }
})
