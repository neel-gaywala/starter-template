import { action, makeAutoObservable, observable } from "mobx";
import { RootStore } from ".";

export default class UserStore {
  rootStore: RootStore;
  firstName: string = "";
  lastName: string = "";
  emailAddress: string = "";
  mobilePhone: string = "";

  isError = {
    firstName: false,
    lastName: false,
    emailAddress: false,
    mobilePhone: false,
  };

  constructor(root: RootStore) {
    this.rootStore = root;
    makeAutoObservable(this, {
      firstName: observable,
      lastName: observable,
      emailAddress: observable,
      mobilePhone: observable,
      isError: observable,

      // Actions
      resetUserDetails: action,
    });
  }

  resetUserDetails() {
    this.firstName = "";
    this.lastName = "";
    this.emailAddress = "";
    this.mobilePhone = "";

    this.isError = {
      firstName: false,
      lastName: false,
      emailAddress: false,
      mobilePhone: false,
    };
  }
}
