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
  type: string;
  icon: IconType;
}
export interface SwitchState {
  signIn?: boolean;
}

export interface WelcomeProps extends SwitchState {
  handler?: React.MouseEventHandler;
}

export interface FormProps extends SwitchState {
  signIn?: boolean;
  fields: InputFields[];
}

export interface FormContainerProps extends SwitchState {
  signInDelayed: boolean;
}

export interface FormikProps {
  signin: number;
}

export interface ResentState {
  resent: boolean;
}
