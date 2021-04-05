import React from 'react';
import { IconType } from '../IconEnum';

export interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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
  signInDelayed: boolean;
}
