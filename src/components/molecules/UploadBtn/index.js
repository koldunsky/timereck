import React, {Component} from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import './style.scss';

import { importTasks } from '../../../store/actions/app';

@connect(({app})  => ({app}), {importTasks})
class UploadBtn extends Component {
  render() {
    const classes = classNames('rek-upload', this.props.className);
    return (
      <input
        type='file'
        className={classes}
        ref={(el) => { this.uploadBtn = el }}
      />
    );
  }


  clickHandler() {
    const self = this;
  this.uploadBtn.addEventListener('change', ()=> {
      const files = self.uploadBtn.files;
      if (files.length <= 0) {
        return false;
      }

      const fr = new FileReader();

      fr.onload = function(e) {
        const result = JSON.parse(e.target.result);
        self.props.importTasks(result);
      };

      fr.readAsText(files.item(0));
    });
  }

  componentDidMount() {
    this.clickHandler.bind(this)();
  }
}


export default UploadBtn;
