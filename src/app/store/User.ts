import { types, flow } from 'mobx-state-tree';
import { SignInValues, SignUpValues } from '../auth/interfaces';
import axios, { AxiosError } from 'axios';
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
        startLoad();

        yield axios.post(`${url}api/auth/registration`, values);
        signIn({ email: values.email, password: values.password });
      } catch (error) {
        self.error = parseError(error);
      } finally {
        self.loading = false;
      }
    });

    const signIn = flow(function* (values: SignInValues) {
      try {
        startLoad();

        axios.defaults.withCredentials = true;

        yield axios.post(`${url}api/auth/login`, values);
        yield authorizeUser();
      } catch (error) {
        self.error = parseError(error);
      } finally {
        self.loading = false;
      }
    });

    const authorizeUser = flow(function* () {
      try {
        startLoad();

        const { data } = yield axios.get(`${url}api/user/current`);

        self.current = data;
      } catch (error) {
        self.error = parseError(error);
      } finally {
        self.loading = false;
      }
    });

    const refreshToken = flow(function* () {
      try {
        startLoad();

        yield axios.post(`${url}api/auth/refreshToken`);
      } catch (error) {
        self.error = parseError(error);
      } finally {
        self.loading = false;
      }
    });

    const signOut = flow(function* () {
      try {
        startLoad();

        yield axios.post(`${url}api/auth/signOut`);

        self.current = {
          firstName: '',
          lastName: '',
          email: '',
          verified: false,
        };
      } catch (error) {
        self.error = parseError(error);
      } finally {
        self.loading = false;
      }
    });

    const parseError = (error: AxiosError): string =>
      error.response?.data ? error.response.data.message : error.message;

    const startLoad = (): void => {
      resetError();
      self.loading = true;
    };

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
