import React from "react";
import { createRoot } from "react-dom/client";
import { PopUp } from "components";
import { Observer } from "./observer";

export class popupObserver implements Observer<string> {
  timerId: NodeJS.Timeout | null = null;

  update(): void {
    if (this.timerId) return;

    const popUpElement = React.createElement(PopUp, { message: "chart loaded successfully" });

    const rootEl = createRoot(document.getElementById("pop-up-root") as HTMLElement);
    rootEl.render(popUpElement);

    this.timerId = setTimeout(() => {
      this.timerId = null;
      rootEl.unmount();
    }, 2500);
  }
}
