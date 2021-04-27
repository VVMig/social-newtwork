import { types } from 'mobx-state-tree';

export const defaultTypes = {
  maybeString: types.maybe(types.string),
  maybeBoolean: types.maybe(types.boolean),
  maybeNumber: types.maybe(types.number),
};
