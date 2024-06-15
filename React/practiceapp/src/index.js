import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundry from './ErrorBoundry';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundry fallback={<h1>Error is coming...</h1>}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer
          stacked
          draggable
        // position='top-center'
        />
      </Provider>
    </BrowserRouter>
  </ErrorBoundry>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
