import { makeAutoObservable } from 'mobx';
import { SignInValues, SignUpValues } from '../auth/interfaces';
import { UserClass } from './interfaces';
import axios from 'axios';
import { url } from '../url';
class User implements UserClass {
  current = {
    firstName: '',
    lastName: '',
    email: '',
    verified: false,
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

      return true;
    } catch (error) {
      this.error = error.response.data.message;
    } finally {
      this.loading = false;
    }

    return false;
  }

  async signIn(values: SignInValues) {
    try {
      this.resetError();

      this.loading = true;

      axios.defaults.withCredentials = true;
      await axios.post(`${url}api/auth/login`, values);
    } catch (error) {
      this.error = error.response.data.message;
    } finally {
      this.loading = false;
    }
  }

  resetError() {
    this.error = '';
  }
}

export const user = new User();
