import React from 'react';
import PropTypes from 'prop-types';
import lotusIcon from '../../../assets/images/lotusIcon.png';
import {
  HomeImage,
  StyledLogo,
  FormStyles,
  FormDiv,
  LabelAuth,
  InputAuth,
  AuthButton
} from './AuthFormStyles';

function AuthForm({ handleAuth, onChange, email, password, name, phone }) {
  return (
    <>
    <HomeImage >
      <StyledLogo src={lotusIcon} alt="lotus icon picture in blue background"/>

      <FormStyles onSubmit={handleAuth.bind(null, email, password, name, phone)} id="signup">
        <FormDiv>
          <LabelAuth htmlFor="signup-email">Email: </LabelAuth>
          <InputAuth onChange={onChange} value={email} type="email" id="email" required/>
        </FormDiv>
        <FormDiv>
          <LabelAuth htmlFor="signup-password">Password: </LabelAuth>
          <InputAuth onChange={onChange} value={password} type="password" id="password"
            required/>
        </FormDiv>
        <FormDiv>
          <LabelAuth htmlFor="name">Name: </LabelAuth>
          <InputAuth onChange={onChange} value={name} type="text" id="name" required/>
        </FormDiv>
        <FormDiv>
          <LabelAuth htmlFor="phone">Phone: </LabelAuth>
          <InputAuth onChange={onChange} value={phone} type="tel" id="phone"/>
        </FormDiv>
        <AuthButton type="submit" value="Sign up">Sign Up</AuthButton>
      </FormStyles>
    </HomeImage>
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
