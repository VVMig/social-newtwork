import React from 'react';

export interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SwitchState {
  signIn?: boolean;
}

export interface WelcomeProps extends SwitchState {
  handler?: React.MouseEventHandler;
}

export interface FormProps extends SwitchState {
  signInDelayed: boolean;
}

export interface WelcomeContentProps {
  title: string;
  subtitle: string;
}
