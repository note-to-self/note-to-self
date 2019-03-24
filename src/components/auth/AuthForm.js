import React from 'react';
import PropTypes from 'prop-types';

function AuthForm({ handleAuth }) {
  return (
    <form onSubmit={handleAuth} id="signup">
      <fieldset>
        <legend>Sign up</legend>
        <label htmlFor="signup-email"></label>
        <input type="email" id="signup-email" placeholder="Email" required/>
        
        <label htmlFor="signup-password"></label>
        <input type="password" id="signup-password" placeholder="Password"
          required/>
        
        <label htmlFor="name"></label>
        <input type="text" id="name" placeholder="Full name" required/>
        
        <label htmlFor="phone"></label>
        <input type="tel" id="phone" placeholder="phone"/>
        
        <button type="submit" value="Sign up"></button>
      </fieldset>
    </form>
  );
}

AuthForm.propTypes = {
  handleAuth: PropTypes.func.isRequired
};

export default AuthForm;
