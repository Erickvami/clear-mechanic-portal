import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRouter from './router';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </div>
  );
}

export default App;
