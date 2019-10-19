import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules';
import registerServiceWorker from './registerServiceWorker';
import store  from './redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
