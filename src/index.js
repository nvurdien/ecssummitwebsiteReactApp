import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'
import 'font-awesome/css/font-awesome.min.css';
import './uikit.min.css';
import './style.css';


const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <ConnectedRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);