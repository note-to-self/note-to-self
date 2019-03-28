import store from '../store';
import { getToken } from '../selectors/session';

export const postNote = note => {
  console.log('NOTE IN FETCH', note);
  return fetch(`${process.env.API_URL}/notes`, {
    method: 'POST',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application/json',
    },
    body: note ? JSON.stringify(note) : null
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      console.log('OK', ok);
      if(!ok) throw json;
      return json;
    })
    .catch(console.log);
    
};
