import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _map from 'lodash/map';
import './style.scss';


/*
 MODIFIERS
 =======================

 'inverted', // white bg, green checkmark

 */

class Checkbox extends Component {
  static propTypes = {
    disabled:       PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onClick:        PropTypes.func,
  };

  render() {
    const baseClass = 'checkbox-wrap';
    const mods = [...this.props.mods || ''];
    const opts = {};
    opts['disabled'] = this.props.disabled ? 'disabled' : null;
    opts['checked'] = this.props.checked ? 'checked' : false;

    const classes = classNames(
      baseClass,
      _map(mods, (mod) => `${baseClass}_${mod}`),
      _map(opts, (optn) => {
        return `${baseClass}_${optn}`
      }),
      this.props.className
    );


    return (
      <label className={classes}>
        <input
          className={`${baseClass}__input` }
          type='checkbox'
          onChange={this.props.onClick}
          {...opts}
        />
        <span className={`${baseClass}__mask`}/>
        {this.props.children}
      </label>
    );
  }
}


export default Checkbox;
