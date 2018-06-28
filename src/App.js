import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import './App.css';

import SuppressionForm from './containers/SuppressionForm'

const App = (props) => {

    const store = configureStore();

    return (
      <div className="App">
        <Provider store={store}>
          <div className='suppression-form'>
            <SuppressionForm />
          </div>
        </Provider>
      </div>
    )
}

export default App;
