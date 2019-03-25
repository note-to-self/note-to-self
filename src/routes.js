import React from 'react';
import { Route } from 'react-router-dom';
import { withSession } from './containers/withSession';
import Callback from './containers/Callback';
import Home from './components/Home';
import AuthContainer from './containers/AuthContainer';

export const ROUTES  = {
  HOME: {
    path: '/home',
    component: withSession(Home),
    linkTo: () => '/home'
  },
  CALLBACK: {
    path: '/callback',
    component: Callback,
    linkTo: () => '/callback'
  },
  AUTHCONTAINER: {
    path: '/auth',
    component: withSession(AuthContainer),
    LinkTo: () => '/auth'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route exact key={route.path} path={route.path} component={route.component} />;
  });
};
