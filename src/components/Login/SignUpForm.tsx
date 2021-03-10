import React from 'react';
import styled from 'styled-components';

import '../../styles/css/login.css';

const Input = styled.input`
  color: black;
`

const SignUpForm =(props:any)=> {
    const { values, errors, handleChange, handleSubmit, touched, validForm, resetValid } = props;
		return (
      <div className="form-container-l sign-up-container-l">
        <form onSubmit={ handleSubmit }>
          <h1 className="title">Create Account</h1>
          <Input type="text" name='first_name' id='first_name' value={ values['first_name'] || '' } placeholder="First name" onChange={ handleChange } />
          <div className="input-error">{ validForm && touched.first_name && errors['first_name'] }</div>
          <Input type="text" name='last_name' id='last_name' value={ values['last_name'] || '' } placeholder="Last name" onChange={ handleChange } />
          <div className="input-error">{ validForm && touched.last_name && errors['last_name'] }</div>
          <Input type="email" name='new_email' id='new_email' value={ values['new_email'] || '' } placeholder="Email" onChange={ handleChange } />
          <div className="input-error">{ validForm && touched.new_email && errors['new_email'] }</div>
          <Input type="password" name='new_password' id='new_password' value={ values['new_password'] || '' } placeholder="Password" onChange={ handleChange } />
          <div className="input-error">{ validForm && touched.new_password && errors['new_password'] }</div>
          <button onClick={ resetValid } className="login" style={{ marginTop: '10px' }}>Sign Up</button>
        </form>
      </div>
		);
}

export default SignUpForm;
