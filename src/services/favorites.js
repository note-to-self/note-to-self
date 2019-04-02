import store from '../store';
import { getToken } from '../selectors/session';

export const getUserFaves = () => {
  return fetch(`${process.env.API_URL}/faves`, {
    method: 'GET',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const updateUserFaves = id => {
  return fetch(`${process.env.API_URL}/faves`, {
    method: 'PUT',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application/json'
    },
    body: id ? JSON.stringify(id) : null
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const deleteFromFaves = id => {
  return fetch(`${process.env.API_URL}/faves/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application/json',
    }
  });
};
