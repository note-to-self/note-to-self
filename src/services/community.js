import store from '../store';
import { getToken } from '../selectors/session';

export const getPublicNotes = () => {
  return fetch(`${process.env.API_URL}/notes`, {
    method: 'GET',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application/json',
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
