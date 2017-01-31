import * as publisher from "../eventPublisher";

export default class ComponentBase {
  subscribe(eventName: string, observer: publisher.observer) {
    publisher.subscribe(eventName, (author: any, ...data: Array<any>) => {
      if (author !== this) {
        observer(...data);
      }
    });
  }
  publish(eventName: string, ...data: Array<any>) {
    publisher.publish(this, eventName, data);
  }
}