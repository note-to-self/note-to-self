import React from 'react';
import PropTypes from 'prop-types';

function AuthForm({ handleAuth, onChange, email, password, name, phone }) {
  return (
    <form onSubmit={handleAuth.bind(null, email, password, name, phone)} id="signup">
      <fieldset>
        <legend>Sign up</legend>
        <label htmlFor="signup-email"></label>
        <input onChange={onChange} type="email" id="signup-email" placeholder="Email" value={email} required/>
        
        <label htmlFor="signup-password"></label>
        <input onChange={onChange} type="password" id="signup-password" placeholder="Password" value={password}
          required/>
        
        <label htmlFor="name"></label>
        <input onChange={onChange} type="text" id="name" placeholder="Full name" value={name} required/>
        
        <label htmlFor="phone"></label>
        <input onChange={onChange} type="tel" id="phone" value={phone} placeholder="phone"/>
        
        <button type="submit" value="Sign up"></button>
      </fieldset>
    </form>
  );
}

AuthForm.propTypes = {
  handleAuth: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default AuthForm;
