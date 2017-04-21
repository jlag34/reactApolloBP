import React from 'react';
import { Router, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { component: Home }
};

const Routes = () => {
  return <Router history={browserHistory} routes={componentRoutes} />
};

export default Routes;

 // These are examples of how to add some child routes
  // child routes = anything after '/' - IE: '/route'
  // childRoutes: [
  //   {
        // All you have to do is 1: define the route here
  //     path: 'home/:id',
  //     getComponent(location, cb) {
                         // 2: Add the path here. Done.
  //       System.import('./components/homepage/Home')
  //         .then(module => cb(null, module.default));
  //     }
  //   },
  //   {
  //     path: 'login',
  //     getComponent(location, cb) {
  //       System.import('./components/login/Login')
  //         .then(module => cb(null, module.default));
  //     }
  //   }
  // ]