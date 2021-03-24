import { FormikProps } from "formik";
import styled from "styled-components";

import "../../styles/css/login.css";

const Input = styled.input`
  color: black;
`;

type Props = {
  validForm: boolean;
  resetValid: () => void;
};

export interface FormValuesSignIn {
  username: string;
  password: string;
  api?: string;
}

const SignInForm = (props: Props & FormikProps<FormValuesSignIn>) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    validForm,
    resetValid,
  } = props;
  console.log(errors);

  return (
    <div className="form-container-l sign-in-container-l">
      <div style={{ color: "red" }}>{errors.api}</div>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Sign in</h1>
        <Input
          type="email"
          name="username"
          id="username"
          value={values["username"] || ""}
          placeholder="Email"
          onChange={handleChange}
        />
        <div className="input-error">
          {validForm && touched.username && errors["username"]}
        </div>
        <Input
          type="password"
          name="password"
          id="password"
          value={values["password"] || ""}
          placeholder="Password"
          onChange={handleChange}
        />
        <div className="input-error">
          {validForm && touched.password && errors["password"]}
        </div>
        <a className="fpw" href="">
          Forgot your password?
        </a>
        <button type="submit" onClick={resetValid} className="login">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
