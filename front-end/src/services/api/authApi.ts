import { User } from "entities/User";

import instance from "./v1";
import { LoginBody } from "./body/AuthBody";

class Auth {
  signIn = (loginBody: LoginBody) =>
    instance.post("/auth/login", {
      username: loginBody.username,
      password: loginBody.password,
    });
  signUp = (registerBody: User) =>
    instance.post("auth/register", {
      email: registerBody.email,
      password: registerBody.password,
      firstName: registerBody.firstName,
      lastName: registerBody.lastName,
      permissions: registerBody.permissions,
    });

  // logout = () => this.client.delete('/sessions');
}

export const AuthApi = new Auth();
