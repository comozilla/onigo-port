export type observer = (...eventData) => void;

const observers: { [key: string]: Array<observer> } = {};

export function subscribe(eventName: string, observer: observer) {
  if (typeof observers[eventName] === "undefined") {
    observers[eventName] = [];
  }
  observers[eventName].push(observer);
}

export function publish(author: any, eventName: string, ...eventData: Array<any>) {
  if (typeof this.observers[eventName] !== "undefined") {
    this.observers[eventName].forEach((observer: observer) => {
      observer(author, ...eventData);
    });
  }
}
