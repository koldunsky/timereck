import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/app';

if(process.env.NODE_ENV === 'development') {
  require('../../global/sass/index.scss');
}

class App extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
  };

  static childContextTypes = {
    carObj: PropTypes.object,
  };

  getChildContext() {
    const carObj = this.props.app.car;
    return {carObj: {...carObj}};
  }

  render() {
    const {main, wrapper} = this.props.app;

    return (
      <main className={classNames('page-main', main)} >
        <article className='page-main__content' >
          <div className={classNames('page-main__wrapper',  `page-main__wrapper--${wrapper}` )} >
            <div className='page-main__container' >
              {this.props.children}
            </div>
          </div>
        </article>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
