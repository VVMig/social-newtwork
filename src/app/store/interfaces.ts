import { SignInValues, SignUpValues } from '../auth/interfaces';

export interface UserFields {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  verified: boolean | null;
}

export interface UserClass {
  current: UserFields;
  error: string;
  loading: boolean;
  signUp(values: SignUpValues): Promise<void>;
  signIn(values: SignInValues): Promise<void>;
  authorizeUser(): Promise<void>;
  resetError(): void;
  isUserSet: boolean;
  resetUser(): void;
}
