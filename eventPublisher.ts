export type ObserveFunction = (...eventData) => void;

const observeFunctions: { [key: string]: Array<ObserveFunction> } = {};

export function subscribe(eventName: string, observeFunction: ObserveFunction) {
  if (typeof observeFunctions[eventName] === "undefined") {
    observeFunctions[eventName] = [];
  }
  observeFunctions[eventName].push(observeFunction);
}

export function publish(author: any, eventName: string, ...eventData: Array<any>) {
  if (typeof this.observeFunctions[eventName] !== "undefined") {
    this.observeFunctions[eventName].forEach((observeFunction: ObserveFunction) => {
      observeFunction(author, ...eventData);
    });
  }
}
