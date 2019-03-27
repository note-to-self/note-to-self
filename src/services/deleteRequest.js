import store from '../store';
import { getToken } from '../selectors/session';

export const deleteRequest = id => {
  return fetch(`https://note-to-self-server.herokuapp.com/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application-json',
    }
  });
};
