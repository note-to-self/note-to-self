/* eslint-disable no-console */
import store from '../store';
import { getToken } from '../selectors/session';

export const postNote = note => {
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
      if(!ok) throw json;
      return json;
    })
    .catch(console.log);
};

export const getNote = id => {
  return fetch(`${process.env.API_URL}/notes/${id}`, {
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
