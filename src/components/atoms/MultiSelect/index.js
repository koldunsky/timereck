import React, {Component, PropTypes} from 'react';
import {Multiselect } from 'react-widgets';
import classNames from 'classnames';
import _ from 'lodash';
import './style.scss';

/* Props */
/*
 value - default value
 data - array of objects [{id: 'some_id', name: 'some_name'}]
 selelct - override default DropdownList settings
 */

class MultiSelect extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.array,
    select: PropTypes.object,
    onChange: PropTypes.func.isRequired,
  };


  setMessages = {
    open: '',
    filterPlaceholderString: '',
    emptyList: 'Список пуст',
    emptyFilter: 'Ничего не найдено',
  };

  selectSettings() {
    return _.extend({
        valueField: 'id',
        textField: 'name',
        caseSensitive: false,
        minLength: 1,
        filter: this.props.data.length < 10 ? false : 'contains',
        // open only for debug
        //open: true,

        onChange: value => {
          this.props.onChange(value)
        },
        // onToggle: value=> {
        //   console.log(value)
        //}
      },
      this.props.select
    );
  }

  selectProps() {
    return {
      defaultValue: this.props.value || ['Выберите', 'xnj yb,elm'],
      data: this.props.data,
      ...this.selectSettings(),
      messages: this.setMessages
    }
  }

  render() {
    const baseClass = 'multiselect-wrap';
    const mods = [...this.props.mods || ''];
    const classes = classNames(
      baseClass,
      _.map(mods, (mod) => `${baseClass}_${mod}`),
      this.props.className ? this.props.className : false
    );
    const propsList = this.selectProps();


    return (
      <div className={classes}>
        {this.props.before}
        <Multiselect
          key={new Date().getUTCMilliseconds()}
          {...propsList}
        />
      </div>
    );
  }
}


export default MultiSelect;
