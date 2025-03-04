import UserStore from "./user";

export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
  }
}

const rootStore = new RootStore();

export const userStore = rootStore.userStore;
