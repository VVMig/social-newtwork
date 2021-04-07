import { SignUpValues } from '../auth/interfaces';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  verified: boolean;
}

export interface UserClass {
  current: User;
  error: null | string;
  loading: boolean;
  signUp(values: SignUpValues): Promise<boolean>;
}
