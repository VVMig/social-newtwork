import { types, flow } from 'mobx-state-tree';
import { SignInValues, SignUpValues } from '../auth/interfaces';
import axios from 'axios';
import { url } from '../url';

const defValues = types.model({
  firstName: types.string,
  lastName: types.string,
  email: types.string,
  verified: types.boolean,
});

export const User = types
  .model('User', {
    current: types.optional(defValues, {
      firstName: '',
      lastName: '',
      email: '',
      verified: false,
    }),
    error: types.optional(types.string, ''),
    loading: types.optional(types.boolean, false),
  })
  .actions((self) => {
    const signUp = flow(function* (values: SignUpValues) {
      try {
        resetError();
        self.loading = true;

        yield axios.post(`${url}api/auth/registration`, values);
        signIn({ email: values.email, password: values.password });
      } catch (error) {
        self.error = error.response.data.message;
      } finally {
        self.loading = false;
      }
    });

    const signIn = flow(function* (values: SignInValues) {
      try {
        resetError();

        self.loading = true;

        axios.defaults.withCredentials = true;

        yield axios.post(`${url}api/auth/login`, values);
        yield authorizeUser();
      } catch (error) {
        self.error = error.response.data.message;
      } finally {
        self.loading = false;
      }
    });

    const authorizeUser = flow(function* () {
      try {
        resetError();

        self.loading = true;

        const { data } = yield axios.get(`${url}api/user/current`);

        self.current = data;
      } catch (error) {
        self.error = error.response.data.message;
      } finally {
        self.loading = false;
      }
    });

    const refreshToken = flow(function* () {
      try {
        resetError();

        self.loading = true;

        yield axios.post(`${url}api/auth/refreshToken`);
      } catch (error) {
        self.error = error.response.data.message;
      } finally {
        self.loading = false;
      }
    });

    const signOut = flow(function* () {
      try {
        resetError();
        self.loading = true;

        yield axios.post(`${url}api/auth/signOut`);

        self.current = {
          firstName: '',
          lastName: '',
          email: '',
          verified: false,
        };
      } catch (error) {
        self.error = error.response.data.message;
      } finally {
        self.loading = false;
      }
    });

    const resetError = (): void => {
      self.error = '';
    };

    return {
      signUp,
      resetError,
      refreshToken,
      signOut,
      signIn,
      authorizeUser,
    };
  })
  .views((self) => ({
    get isUserSet() {
      return !Object.values(self.current).includes('');
    },
  }));
