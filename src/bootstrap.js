import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './style/main.scss';

import history from './history';

import Layout from './components/layout';
import Home from './components/home';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Contact from './components/contact';
import Account from './components/account/account';
import Experience from './components/experience';
import About from './components/about';
import Welcome from './components/welcome';
import Portfolio from './components/portfolio/portfolio';




function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>

            <Route path='/' exact component={Welcome}/>
            <Route path='/welcome' exact component={Welcome}/>
            <Route path='/account' exact component={Account}/>
            <Route path='/signin' exact component={Signin}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/experience' exact component={Experience}/>
            <Route path='/about' exact component={About}/>
            <Route path='/portfolio' exact component={Portfolio}/>

          </Switch>
        </Layout>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
