import store from '../store';
import { getToken } from '../selectors/session';

export const postNote = note => {
  return fetch('http://localhost:7891/notes', {
    method: 'POST',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application-json',
    },
    body: note ? JSON.stringify(note) : null
      .then(res => [res.ok, res.json()])
      .then(([ok, json]) => {
        if(!ok) throw json;
        return json;
      })
  });

};
