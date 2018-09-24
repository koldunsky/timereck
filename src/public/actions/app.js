// import axios from 'axios';
// import { APP_BASE_URL } from '../constants/urls';
// import moment from 'moment';
import * as c  from '../constants/app';

/**
 * Изменяет параметры страницы.
 */
export function modify(settings) {
    return {
        type: c.MODIFY,
        payload: settings
    };
}

export function startRek() {
    return {
        type: c.START_REK,
        payload: Date.now()
    };
}

export function stopRek() {
    return {
        type: c.STOP_REK,
        payload: Date.now()
    };
}

export function updateTime() {
    return {
        type: c.UPDATE_TIME,
        payload: Date.now()
    };
}

export function updateTaskName(name) {
    return {
        type: c.UPDATE_TASK_NAME,
        payload: name
    };
}

export function saveTask() {
    return {
        type: c.ADD_TASK
    };
}

export function reset() {
    return {
        type: c.RESET
    };
}

export function importTasks(json) {
  return {
    type: c.IMPORT_TASKS,
    payload: json
  };
}
