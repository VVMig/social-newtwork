import { IconType } from '../../IconEnum';
import { InputFields, NameValues } from '../interfaces';

export const signInFields: InputFields[] = [
  {
    icon: IconType.Email,
    name: NameValues.Email,
    placeholder: 'Email',
  },
  {
    icon: IconType.Lock,
    name: NameValues.Password,
    placeholder: 'Password',
  },
];

export const signUpFields: InputFields[] = [
  {
    icon: IconType.User,
    name: NameValues.FirstName,
    placeholder: 'First name',
  },
  {
    icon: IconType.User,
    name: NameValues.LastName,
    placeholder: 'Last name',
  },
  {
    icon: IconType.Email,
    name: NameValues.Email,
    placeholder: 'Email',
  },
  {
    icon: IconType.Lock,
    name: NameValues.Password,
    placeholder: 'Password',
  },
];
