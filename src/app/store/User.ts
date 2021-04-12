import { types } from 'mobx-state-tree';

const defValues = types.model({
  firstName: types.string,
  lastName: types.string,
  email: types.string,
  verified: types.boolean,
});

export const User = types.model('User', {
  current: types.optional(defValues, {
    firstName: '',
    lastName: '',
    email: '',
    verified: false,
  }),
  error: types.optional(types.string, ''),
  loading: types.optional(types.boolean, false),
});
