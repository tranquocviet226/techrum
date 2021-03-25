import { FormikProps } from "formik";
import styled from "styled-components";

import "../../styles/css/login.css";

const Input = styled.input`
  color: black;
`;
type Props = {
  validForm: boolean;
  resetValid: () => void;
  toggle: () => void;
};

export interface FormValuesSignUp {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  api?: string;
}

const SignUpForm = (props: Props & FormikProps<FormValuesSignUp>) => {
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
    <div className="form-container-l sign-up-container-l">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Create Account</h1>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={values["firstName"] || ""}
          placeholder="First name"
          onChange={handleChange}
        />
        <div className="input-error">
          {validForm && touched.firstName && errors["firstName"]}
        </div>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          value={values["lastName"] || ""}
          placeholder="Last name"
          onChange={handleChange}
        />
        <div className="input-error">
          {validForm && touched.lastName && errors["lastName"]}
        </div>
        <Input
          type="email"
          name="email"
          id="email"
          value={values["email"] || ""}
          placeholder="Email"
          onChange={handleChange}
        />
        <div className="input-error">
          {validForm && touched.email && errors["email"]}
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
        <button
          onClick={resetValid}
          type="submit"
          className="login"
          style={{ marginTop: "10px" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
