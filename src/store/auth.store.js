import {action, runInAction, makeAutoObservable} from 'mobx';

class AddressStore {
  auth = null;

  constructor() {
    makeAutoObservable(this, {});
  }
}

export default new AddressStore();
