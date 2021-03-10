import V1 from './v1';

class Auth extends V1 {
  login = (values: Object) => this.client.post('/sessions', { email: values['email'], password: values['password'] });
  logout = () => this.client.delete('/sessions');
  signup = (values: Object) => this.client.post('/users', values);
}

export const AuthApi = new Auth();
