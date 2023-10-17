import { makeAutoObservable, runInAction } from "mobx";

class _MockUpImageViewController {
  constructor() {
    makeAutoObservable(this);
  }

  public image: string | undefined = "";

  public setImage(imageLink?: string) {
    runInAction(() => {
      this.image = imageLink;
    });
  }
}

const MockUpImageViewController = new _MockUpImageViewController();

export { MockUpImageViewController };
