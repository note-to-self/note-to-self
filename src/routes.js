import React from 'react';
import { Route } from 'react-router-dom';
import { withSession } from './containers/withSession';
import Callback from './containers/auth/Callback';
import Home from './components/Home';

export const ROUTES  = {
  HOME: {
    path: '/',
    component: withSession(Home),
    linkTo: () => '/'
  },
  CALLBACK: {
    path: '/callback',
    component: Callback,
    linkTo: () => '/callback'
  }
    
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route exact key={route.path} path={route.path} component={route.component} />;
  });
};
