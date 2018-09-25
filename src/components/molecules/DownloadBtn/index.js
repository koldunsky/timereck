import React, {Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {APP_NAME} from '../../../constants/app';
// import _ from 'lodash';
import './style.scss';

@connect(({app})  => ({app}), null)
class DownloadBtn extends Component {
  render() {
    const classes = classNames('rek-download', this.props.className);
    return (
      <a
        className={classes}
        ref={(el) => { this.downloadBtn = el; }}
      >
        Download
      </a>
    );
  }

  clickHandler() {
    console.info(this.props);
    // const self = this;
    this.downloadBtn.addEventListener('click', ()=> {
      const a = this.downloadBtn;
      const data = this.props.app.tasks;
      const json = JSON.stringify(data);
      const blob = new Blob([json], {type: 'application/json'});
      const url  = URL.createObjectURL(blob);

      a.download    = `${APP_NAME.toLowerCase()}_tasks.json`;
      a.href        = url;
    });
  }

  componentDidMount() {
    this.clickHandler.bind(this)();
  }
}

export default DownloadBtn;
