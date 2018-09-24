import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import _map from 'lodash/map';
import './style.scss';


/*
 MODIFIERS
 =======================

 */

export default class Radiogroup extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  render() {
    const baseClass = 'radiogroup-wrap';
    const mods = [...this.props.mods || ''];
    const opts = {};
    this.props.disabled ? opts['disabled'] = 'disabled' : null;
    this.props.checked ? opts['defaultChecked'] = 'defaultChecked' : null;

    const classes = classNames(
      baseClass,
      _map(mods, (mod) => `${baseClass}_${mod}`),
      _map(opts, (optn) => {
        return `${baseClass}_${optn}`
      }),
      this.props.className
    );


    return (
      <div className={classes}>
        {/* Radiobuttons here */}
      </div>
    );
  }
}
