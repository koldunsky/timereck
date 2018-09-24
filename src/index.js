import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore({});
const node = document.getElementById('root');
const container = (<Root store={store} />);
console.info(node, container);
if (module.hot) {
  module.hot.accept();
}
render(container, node);