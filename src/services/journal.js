import store from '../store';
import { getToken } from '../selectors/session';

export const getUserNotes = () => {
  return fetch(`${process.env.API_URL}/notes/user/allnotes`, {
    method: 'GET',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      return [res.ok, res.json()];
    })
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const deleteRequest = id => {
  
  return fetch(`${process.env.API_URL}/notes/${id}`, {
    method: 'DELETE',
    headers: {
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

