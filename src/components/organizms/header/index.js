import React, {Component} from 'react';
import TaskInput from '../../molecules/TaskInput/index';

import './style.scss';

import RecButton from '../../molecules/RecButton/index';
// import MultiSelect from '../../atoms/MultiSelect/index';
import Logo from '../../molecules/Logo/index';

class Header extends Component {
  render() {
    return (
      <header className='main-header'>
        <Logo className='main-header__logo'/>
        <div className='main-header__workarea'>
          <TaskInput />
          <RecButton/>
        </div>
      </header>
    );
  }
}


export default Header;
