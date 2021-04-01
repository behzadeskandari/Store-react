import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { ProductProvider } from './context/context';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import {reducer} from './reducers/counterReducer';
import { watchAgeUp, watchAgeDown} from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp, watchAgeDown);

ReactDOM.render(
    // <React.StrictMode>
    <ProductProvider>
          <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ProductProvider>,
    //</React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
