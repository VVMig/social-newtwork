import React from 'react';
import { IconType } from '../IconEnum';

export interface SignInValues {
  email: string;
  password: string;
}
export interface SignUpValues extends SignInValues {
  firstName: string;
  lastName: string;
}

export enum NameValues {
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  Password = 'password',
}

export interface InputFields {
  name: NameValues;
  placeholder: string;
  icon: IconType;
}
export interface SwitchState {
  signin?: boolean;
}

export interface WelcomeProps extends SwitchState {
  handler?: React.MouseEventHandler;
}

export interface FormProps extends SwitchState {
  signin: boolean;
  fields: InputFields[];
}

export interface FormContainerProps extends SwitchState {
  signinDelayed: boolean;
}
