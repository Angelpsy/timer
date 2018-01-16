import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import { AppContainer } from 'react-hot-loader'
import './index.css';
import App from './App';
import store from './store';
// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    })
}
