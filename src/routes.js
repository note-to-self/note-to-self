import React from 'react';
import { Route } from 'react-router-dom';
import { withSession } from './containers/withSession';
import Callback from './containers/Callback';
import HomeContainer from './containers/HomeContainer';
import AuthContainer from './containers/AuthContainer';
import LandingContainer from './containers/LandingContainer';
import CommunityPage from './containers/CommunityPage';
import LoginContainer from './containers/LoginContainer';
import JournalPage from './containers/JournalPage';
import About from './components/About';

export const ROUTES  = {
  HOME: {
    path: '/home',
    component: withSession(HomeContainer),
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
  },
  LOGINCONTAINER: {
    path: '/login',
    component: LoginContainer,
    linkTo: () => '/login'
  },
  LANDING: {
    path: '/',
    component: LandingContainer,
    linkTo: () => '/'
  },
  JOURNAL: {
    path: '/journal',
    component: withSession(JournalPage),
    linkTo: () => '/journal'
  },
  COMMUNITYPAGE: {
    path: '/community',
    component: withSession(CommunityPage),
    linkTo: () => '/community'
  },
  ABOUT: {
    path: '/about',
    component: withSession(About),
    linkTo: () => '/about'
  }
};

export const getRoutes = () => {
  return Object.values(ROUTES).map(route => {
    return <Route exact key={route.path} path={route.path} component={route.component} />;
  });
};
