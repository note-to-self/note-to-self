import { createAction } from 'promise-middleware-redux';
import from './';

export const [
  createUser,
  CREATE_USER,
  CREATE_USER_PENDING,
  CREATE_USER_FULFILLED,
  CREATE_USER_REJECTED
] = createAction('CREATE_USER', postUser);
