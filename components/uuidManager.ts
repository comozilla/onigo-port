import ComponentBase from "./componentBase";
import noble from "noble";

export default class UUIDManager extends ComponentBase {
  private nameAndUUIDs: { [key: string]: string };
  constructor() {
    super();

    noble.on("stateChange", state => {
      if (state === "poweredOn") {
        noble.startScanning();
      } else {
        noble.stopScanning();
      }
    });

    noble.on("discover", peripheral => {
      this.setName(peripheral.uuid, peripheral.advertisement.localName);
    });

    this.subscribe("addSphero", this.addSpheroWithUUID.bind(this));
  }
  private setName(uuid: string, name: string) {
    console.log(`name: ${name}, uuid: ${uuid}`);
    this.nameAndUUIDs[name] = uuid;
  }
  private addSpheroWithUUID(name: string, spheroName: string) {
    if (typeof this.nameAndUUIDs[name] === "undefined") {
      throw new Error("The name's uuid was not found.");
    }
    this.publish("addSpheroWithUUID", name, this.nameAndUUIDs[spheroName]);
  }
}
