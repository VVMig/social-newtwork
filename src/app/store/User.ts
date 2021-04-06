import { makeAutoObservable } from 'mobx';

class User {
  current = {};

  constructor() {
    makeAutoObservable(this);
  }
}

export const user = new User();
