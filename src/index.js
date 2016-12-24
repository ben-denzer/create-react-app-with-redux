import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/main.scss';
import Main from './components/Main';

const store = configureStore();
const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
);

render(<App />, document.getElementById('root'));