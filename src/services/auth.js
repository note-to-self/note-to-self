import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  clientID: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT,
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  return auth0.authorize();
};
//turn into a callback
// maybe works?
export const signup = (email, password, name, phone) => {
  return new Promise((resolve, reject) => {
    auth0.signup({
      email,
      password,
      connection: 'Username-Password-Authentication',
      user_metadata: { name, phone }
    },  (err, result) =>{
      if(err) return reject(err);
      return resolve({
        token: result.idToken,
        email: result.email
      });
    });
  });
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, result) => {
      if(result && result.accessToken && result.idToken) {
        auth0.client.userInfo(result.accessToken, (err, info) => {
          if(err) return reject(err);
          return resolve({
            token: result.idToken,
            id: info.sub,
            name: info.nickname,
            profilePicture: info.picture,
            user_metadata: info['https://note-to-self-client.com/metadata']
          });
        });
      } else {
        reject(err || 'Something went wrong');
      }
    });
  });
};

