import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import './style.scss';

class Button extends Component {
  static propTypes = {
    mods: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const baseClass='btn';
    const mods = [...this.props.mods || ''];
    const classes = classNames(
      baseClass,
      _.map(mods, (mod) => `${baseClass}_${mod}`),
      this.props.className ? this.props.className : false
    );
    return (
      <button
        className={classes}
        onClick={this.onClick.bind(this)}
      >
        {this.props.children}
      </button>
    );
  }

  onClick() {
    if(!this.isDisabled()) {
      this.props.onClick()
    }
  }

  isDisabled() {
    return this.props.mods.indexOf('disabled') !== -1;
  }
}


export default Button;
