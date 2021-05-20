import { useState } from "react";
import styled from "styled-components";

import SignInFormContainer from "containers/admin/login/SignInFormContainer";
import SignUpFormContainer from "containers/admin/login/SingUpFormContainer";
import "styles/user/css/login.css";

const ContainerLogin = styled.div`
  font-family: "Montserrat", sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Title = styled.h1`
  color: white;
`;

const LoginComponent = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [validForm, setValidForm] = useState(true);
  const toggle = () => {
    setSignIn(!isSignIn);
    setValidForm(false);
  };

  const resetValid = () => {
    setValidForm(true);
  };

  return (
    <ContainerLogin>
      <div
        className={isSignIn ? "container-l" : "container-l right-panel-active"}
        id="container"
      >
        <SignInFormContainer validForm={validForm} resetValid={resetValid} />
        <SignUpFormContainer
          validForm={validForm}
          resetValid={resetValid}
          toggle={toggle}
        />

        <div className="overlay-container-l">
          <div className="overlay-l">
            <div className="overlay-panel-l overlay-left-l">
              <Title>Welcome Back!</Title>
              <p className="desc">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost login" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel-l overlay-right-l">
              <Title>Hello, Friend!</Title>
              <p className="desc">
                Enter your personal details and start journey with us
              </p>
              <button className="ghost login" id="signUp" >
               Hello world
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContainerLogin>
  );
};

export default LoginComponent;
