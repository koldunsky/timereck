import React, {Component} from 'react';
import classNames from 'classnames';
import {APP_NAME} from '../../../constants/app';
import './style.scss';

class Logo extends Component {
  render() {
    const classes = classNames('main-logo', this.props.className);
    return (
      <h1
        className={classes}
      >
        {APP_NAME}
      </h1>
    );
  }
}


export default Logo;
