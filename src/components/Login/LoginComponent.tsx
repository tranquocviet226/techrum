import React, { Component, useState } from 'react';
import styled from 'styled-components';

import SignInForm from '../../containers/Login/SignInForm';
import SignUpForm from '../../containers/Login/SignUpForm';
import '../../styles/css/login.css';

const ContainerLogin = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Title = styled.h1`
  color: white;
`

const LoginComponent = () => {
    const [isSignIn, setSignIn] = useState(true)
    const [validForm, setValidForm] = useState(true)

    const toggle = () => {
        setSignIn(!isSignIn)
        setValidForm(false)
    }

    const resetValid = () => {
        setValidForm(true)
    }

    return (
        <ContainerLogin>
            <div className={isSignIn ? 'container-l' : 'container-l right-panel-active'} id="container">

                <SignInForm
                    validForm={validForm}
                    resetValid={() => resetValid()}
                />
                <SignUpForm
                    validForm={validForm}
                    resetValid={() => resetValid()}
                    toggle={() => toggle()}
                />

                <div className="overlay-container-l">
                    <div className="overlay-l">
                        <div className="overlay-panel-l overlay-left-l">
                            <Title>Welcome Back!</Title>
                            <p className="desc">To keep connected with us please login with your personal info</p>
                            <button className="ghost login" id="signIn" onClick={() => toggle()}>Sign In</button>
                        </div>
                        <div className="overlay-panel-l overlay-right-l">
                            <Title>Hello, Friend!</Title>
                            <p className="desc">Enter your personal details and start journey with us</p>
                            <button className="ghost login" id="signUp" onClick={() => toggle()}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerLogin>
    );
}

export default LoginComponent;
