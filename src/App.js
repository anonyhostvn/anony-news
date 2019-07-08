import React from 'react';
import {
  Provider
} from 'react-redux' ;

import MainApp from './app/main-app' ;
import store from './redux/store' ;
import {
  BrowserRouter
} from 'react-router-dom' ;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainApp/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
