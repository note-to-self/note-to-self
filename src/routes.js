import React from 'react';
import { Route } from 'react-router-dom';
import { withSession } from './containers/withSession';
import Callback from './containers/Callback';
import HomeContainer from './containers/HomeContainer';
import AuthContainer from './containers/AuthContainer';

export const ROUTES  = {
  HOME: {
    path: '/home',
    component: HomeContainer,
    linkTo: () => '/home'
  },
  CALLBACK: {
    path: '/callback',
    component: Callback,
    linkTo: () => '/callback'
  },
  AUTHCONTAINER: {
    path: '/auth',
    component: AuthContainer,
    linkTo: () => '/auth'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route exact key={route.path} path={route.path} component={route.component} />;
  });
};
