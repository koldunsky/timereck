import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App/index';
import Index from '../pages/index/index';

export default class Root extends Component {
  constructor(props) {
    super(props);
    console.info(props);
  }

  render() {
    console.info(this.props.store);
    return (
      <div>
        <Provider store={this.props.store}>
          <App>
            <Index/>
          </App>
        </Provider>
      </div>
    );
  }
}
Root.propTypes = {
  // store: PropTypes.object.isRequired
}