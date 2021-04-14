import { Instance, types, flow } from 'mobx-state-tree';
import { User } from './User';
import { axiosConfig } from '../utils/axiosConfig';
import Axios from 'axios';

const apiClient = Axios.create(axiosConfig);

export const Store = types
  .model('Store', {
    user: types.maybe(User),
  })
  .actions((self) => ({
    setUser(user: Instance<typeof User>) {
      self.user = { ...user };
    },
    resetUser() {
      self.user = undefined;
    },
  }))
  .views((self) => ({
    get isUserSet() {
      return !!self.user;
    },
  }));
