import React, { Component, PropTypes } from 'react';
import Select from '../Select';
import Button from '../Button';
import classNames from 'classnames';
import _ from 'lodash';
import './style.scss';

/* Props */
/*
value - default value
data - array of objects [{id: 'some_id', name: 'some_name'}]
seelct - override default settings for DropdownList
*/

class SelectGeo extends Component{
    static propTypes = {
        name: PropTypes.string,
        //value: PropTypes.string,
        data: PropTypes.array,
        select: PropTypes.object,
    };

    getLocation() {
      console.log('you on planet Earth now');
    }

    render () {
      const baseClass = 'select-wrap';
      const mods = [...this.props.mods || ''];
      const classes = classNames(
        baseClass,
        _.map(mods, (mod) => `${baseClass}_${mod}`),
        this.props.className ? this.props.className : false
      );
        return (
            <Select
              className={classes}
                before={
                    <Button
                      className={classNames(`${baseClass}_geo__btn`)}
                      mods={['white']}
                      onClick={this.getLocation}
                    >
                       <i className='hasicon icon_location'></i>
                    </Button>
                }
                mods={['geo', ...mods]}
                {...this.props}
            />
        );
    }
}


export default SelectGeo;
