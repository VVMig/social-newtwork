import { ISimpleType, types, IOptionalIType } from 'mobx-state-tree';

const defValueString: IOptionalIType<
  ISimpleType<string>,
  [undefined]
> = types.optional(types.string, '');

export const User = types.model('User', {
  firstName: defValueString,
  lastName: defValueString,
  email: defValueString,
  verified: types.optional(types.boolean, false),
});
