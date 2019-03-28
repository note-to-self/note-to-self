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

export const getUserFaves = id => {
  return fetch(`${process.env.API_URL}/faves/${id}`, {
    method: 'GET',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application-json'
    }
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const updateUserFaves = (id, note) => {
  return fetch(`${process.env.API_URL}/faves/${id}`, {
    method: 'PUT',
    headers : {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application-json'
    },
    body: note ? JSON.stringify(note) : null
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
      'Content-Type': 'application-json',
    }
  });
};
