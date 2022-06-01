import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import "./index.css";

// Put any other imports below so that CSS from your components takes precedence over default styles.
import App from './App';
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter as Router } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    
    <Router>

      <AppContextProvider>
        <App/>
      </AppContextProvider>
    </Router>

    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
