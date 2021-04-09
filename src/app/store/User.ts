import { makeAutoObservable } from 'mobx';
import { SignInValues, SignUpValues } from '../auth/interfaces';
import { UserClass, UserFields } from './interfaces';
import axios from 'axios';
import { url } from '../url';
class User implements UserClass {
  current = {
    firstName: null,
    lastName: null,
    email: null,
    verified: null,
  };
  error = '';
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async signUp(values: SignUpValues) {
    try {
      this.resetError();

      this.loading = true;

      await axios.post(`${url}api/auth/registration`, values);
      this.signIn({ email: values.email, password: values.password });
    } catch (error) {
      this.error = error.response.data.message;
    } finally {
      this.loading = false;
    }
  }

  async signIn(values: SignInValues) {
    try {
      this.resetError();

      this.loading = true;

      axios.defaults.withCredentials = true;

      await axios.post(`${url}api/auth/login`, values);

      await this.authorizeUser();
    } catch (error) {
      this.error = error.response.data.message;
    } finally {
      this.loading = false;
    }
  }

  async signOut() {
    try {
      this.resetError();

      this.loading = true;

      await axios.post(`${url}api/auth/signOut`);

      this.resetUser();
    } catch (error) {
      this.error = error.response.data.message;
    } finally {
      this.loading = false;
    }
  }

  async authorizeUser() {
    try {
      this.resetError();

      this.loading = true;

      const { data } = await axios.get(`${url}api/user/current`);

      this.current = data;
    } catch (error) {
      this.error = error.response.data.message;
    } finally {
      this.loading = false;
    }
  }

  async refreshToken() {
    try {
      this.resetError();

      this.loading = true;

      await axios.post(`${url}api/auth/refreshToken`);
      this.loading = true;
    } catch (error) {
      this.error = error.response.data.message;
    } finally {
      this.loading = false;
    }
  }

  get isUserSet() {
    return !Object.values(this.current).includes(null);
  }

  resetUser() {
    let key: keyof UserFields;

    for (key in this.current) {
      this.current[key] = null;
    }
  }

  resetError() {
    this.error = '';
  }
}

export const user = new User();
