import React, {Component} from 'react';

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
                    <RecButton />
                </div>
            </header>
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


export default Header;
