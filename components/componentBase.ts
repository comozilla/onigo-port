import * as publisher from "../eventPublisher";

export default class ComponentBase {
  subscribe(eventName: string, observeFunction: publisher.ObserveFunction) {
    publisher.subscribe(eventName, (author: any, ...data: Array<any>) => {
      if (author !== this) {
        observeFunction(...data);
      }
    });
  }
  publish(eventName: string, ...data: Array<any>) {
    publisher.publish(this, eventName, data);
  }
}
