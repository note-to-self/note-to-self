import store from '../store';
import { getToken } from '../selectors/session';

export const postNote = note => {
  return fetch('https://note-to-self-server.herokuapp.com/notes', {
    method: 'POST',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: note ? JSON.stringify(note) : null
      .then(res => [res.ok, res.json()])
      .then(([ok, json]) => {
        if(!ok) throw json;
        return json;
      })
  });

};
