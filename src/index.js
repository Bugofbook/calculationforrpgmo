import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import storeFactory from './store';
import { Home, Combat, Crafting, Gathering, Whoops404 } from "./pages";
import { Calculation } from "./pages/caculation";

const store = storeFactory()

window.React = React
window.store = store

render(
    <Provider store={store}>
        <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Combat" component={Combat} />
            <Route path="/Crafting" component={Crafting} />
            <Route path="/Gathering" component={Gathering} />
            <Route path="/Calculation" component={Calculation} />
            <Route component={Whoops404} />
        </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
