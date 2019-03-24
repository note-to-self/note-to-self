import { createAction } from 'promise-middleware-redux';
import { handleAuth } from '../services/auth';

export const [
  setSession,
  SET_SESSION,
  SET_SESSION_PENDING,
  SET_SESSION_FULFILLED,
  SET_SESSION_REJECTED
] = createAction('SET_SESSION', handleAuth);
