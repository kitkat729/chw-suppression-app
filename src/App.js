import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import './App.css';

import SuppressionListContainer from './containers/SuppressionListContainer'

const App = (props) => {

    const store = configureStore();

    return (
      <div className="App">
        <Provider store={store}>
          <SuppressionListContainer />
        </Provider>
      </div>
    )
}

export default App;
