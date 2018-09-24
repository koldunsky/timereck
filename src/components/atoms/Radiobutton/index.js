import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import _map from 'lodash/map';
import './style.scss';


/*
 MODIFIERS
 =======================

 */

export default class Radiobutton extends Component {
  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onClick: PropTypes.func,
    mods: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const baseClass = 'radio-wrap';
    const mods = [...this.props.mods || ''];
    const opts = {};
    opts['disabled'] = this.props.disabled ? 'disabled' : false;
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
          type='radio'
          onChange={this.props.onClick}
          {...opts}
        />
        <span className={`${baseClass}__mask`}/>
        {this.props.children}
      </label>
    );
  }
}
