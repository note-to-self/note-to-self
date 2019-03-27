import store from '../store';
import { getToken } from '../selectors/session';

export const postNote = note => {
  return fetch('https://note-to-self-server.herokuapp.com/notes', {
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

export const getPublicNotes = () => {
  return fetch(`${process.env.API_URL}/notes`, {
    method: 'GET',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application-json',
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getUserNotes = id => {
  return fetch(`${process.env.API_URL}/notes/user/${id}`, {
    method: 'GET',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application-json',
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getNote = id => {
  return fetch(`${process.env.API_URL}/notes/${id}`, {
    method: 'GET',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application-json',
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const deleteRequest = id => {
  return fetch(`https://note-to-self-server.herokuapp.com/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application-json',
    }
  });
};