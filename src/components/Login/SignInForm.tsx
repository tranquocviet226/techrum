import { type } from 'node:os';
import React, { Component } from 'react';
import styled from 'styled-components';

import '../../styles/css/login.css';

const Input = styled.input`
  color: black;
`
type Props = {
  values: any;
  errors: any;
  handleChange: () => void;
  handleSubmit: () => void;
  touched: any;
  validForm: boolean;
  resetValid: () => void;
}

const SignInForm = (props: Props) => {
  const { values, errors, handleChange, handleSubmit, touched, validForm, resetValid } = props;
  return (
    <div className="form-container-l sign-in-container-l">
      <div style={{ color: 'red' }}>{errors.api}</div>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Sign in</h1>
        <Input type="email" name='email' id='email' value={values['email'] || ''} placeholder="Email" onChange={handleChange} />
        <div className="input-error">{validForm && touched.email && errors['email']}</div>
        <Input type="password" name='password' id='password' value={values['password'] || ''} placeholder="Password" onChange={handleChange} />
        <div className="input-error">{validForm && touched.password && errors['password']}</div>
        <a className="fpw" href="">Forgot your password?</a>
        <button onClick={resetValid} className="login">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
