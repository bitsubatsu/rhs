import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';


import configureStore from './store/configure';
const store = configureStore();

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();


ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

