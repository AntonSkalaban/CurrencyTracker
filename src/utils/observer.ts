import React from "react";
import { createRoot } from "react-dom/client";
import { PopUp } from "components/PopUp";

interface Observer<T> {
  update: (data: T) => void;
}

export class Subject<T> {
  private observers: Observer<T>[] = [];

  public addObserver(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) this.observers.splice(index, 1);
  }

  public notify(data: T): void {
    this.observers.forEach((observer) => observer.update(data));
  }
}

export class PopupObserver implements Observer<string> {
  timerId: NodeJS.Timeout | null = null;

  update(state: string): void {
    if (state !== "MONTH" || this.timerId) return;

    const popUpElement = React.createElement(PopUp, { message: "hello" });

    const rootEl = createRoot(document.getElementById("pop-up-root") as HTMLElement);
    rootEl.render(popUpElement);

    this.timerId = setTimeout(() => {
      this.timerId = null;
      rootEl.unmount();
    }, 3000);
  }
}
