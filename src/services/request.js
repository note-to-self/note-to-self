import { getToken } from '../selectors/session';

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}/notes`, {
    method,
    headers: {
      Authorization: `Bearer ${getToken(store.getState())}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if (!ok) throw json;
      return json;
    })
}

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const patch = (path, body) => request(path, 'PATCH', body);
export const del = (path, body) => request(path, 'DELETE', body);
