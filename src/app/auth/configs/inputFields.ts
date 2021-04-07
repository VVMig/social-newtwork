import { IconType } from '../../IconEnum';
import { InputFields, NameValues } from '../interfaces';

export const signInFields: InputFields[] = [
  {
    icon: IconType.Email,
    name: NameValues.Email,
    placeholder: 'Email',
    type: 'email',
  },
  {
    icon: IconType.Lock,
    name: NameValues.Password,
    placeholder: 'Password',
    type: 'password',
  },
];

export const signUpFields: InputFields[] = [
  {
    icon: IconType.User,
    name: NameValues.FirstName,
    placeholder: 'First name',
    type: 'text',
  },
  {
    icon: IconType.User,
    name: NameValues.LastName,
    placeholder: 'Last name',
    type: 'text',
  },
  {
    icon: IconType.Email,
    name: NameValues.Email,
    placeholder: 'Email',
    type: 'email',
  },
  {
    icon: IconType.Lock,
    name: NameValues.Password,
    placeholder: 'Password',
    type: 'password',
  },
];
