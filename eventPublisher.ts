type observer = (...eventData) => void;

class EventPublisher {
  private observers: { [key: string]: Array<observer> };

  constructor() {
    this.observers = {};
  }

  subscribe(eventName: string, observer: observer) {
    if (typeof this.observers[eventName] === "undefined") {
      this.observers[eventName] = [];
    }
    this.observers[eventName].push(observer);
  }

  publish(eventName: string, ...eventData) {
    if (typeof this.observers[eventName] !== "undefined") {
      this.observers[eventName].forEach((observer: observer) => {
        observer.apply(null, eventData);
      });
    }
  }
}

export default new EventPublisher();