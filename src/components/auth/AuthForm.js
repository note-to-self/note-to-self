import React from 'react';
import PropTypes from 'prop-types';

function AuthForm({ handleAuth, onChange, email, password, name, phone }) {
  return (
    <>
    <form onSubmit={handleAuth.bind(null, email, password, name, phone)} id="signup">
      <fieldset>
        <legend>Sign up</legend>
        <label htmlFor="signup-email"></label>
        <input onChange={onChange} value={email} type="email" id="email" placeholder="Email" required/>
        
        <label htmlFor="signup-password"></label>
        <input onChange={onChange} value={password} type="password" id="password" placeholder="Password"
          required/>
        
        <label htmlFor="name"></label>
        <input onChange={onChange} value={name} type="text" id="name" placeholder="Full name" required/>
        
        <label htmlFor="phone"></label>
        <input onChange={onChange} value={phone} type="tel" id="phone"  placeholder="phone"/>
        
        <button type="submit" value="Sign up">CREAT USER BUTTOn</button>
      </fieldset>
    </form>
</>
  );
}

AuthForm.propTypes = {
  handleAuth: PropTypes.func.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default AuthForm;
