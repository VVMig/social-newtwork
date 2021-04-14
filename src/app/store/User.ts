import { types } from 'mobx-state-tree';
import { defaultTypes } from '../utils';

export const User = types.model('User', {
  firstName: defaultTypes.maybeString,
  lastName: defaultTypes.maybeString,
  email: defaultTypes.maybeString,
  verified: defaultTypes.maybeBoolean,
});
