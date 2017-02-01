import ComponentBase from "./componentBase";
import sphero from "sphero";

export default class SpheroManager extends ComponentBase {
  orbs: { [key: string]: any };
  constructor() {
    super();
    this.orbs = {};
    this.subscribe("addSphero", (name: string, port: string) => {
      this.add(name, port);
    });
  }
  private add(name: string, port: string) {
    const orb = sphero(port);
    orb.connect(error => {
      this.orbs[name] = orb;
      this.publish("connectedSphero", name, port);
    });
  }
}
