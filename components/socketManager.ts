import * as io from "socket.io";
import { createServer, Server } from "http";
import ComponentBase from "./componentBase";
import Orb from "../orb";

const subjectList: Array<string> = [
  "addSphero",
  "removeSphero",
  "rejectName",
  "runCommand",
  "updateOrbs"
];

const middlewares: { [key: string]: (any) => any } = {
  updateOrbs(orbs: { [key: string]: Orb }) {
    return Object.keys(orbs).map(name => {
      return { name, port: orbs[name].port };
    });
  }
};

export default class SocketManager extends ComponentBase {
  private server: Server;
  private io: SocketIO.Server;
  constructor(port: number) {
    super();

    this.server = createServer();
    this.server.listen(port);

    this.io = io(this.server);

    subjectList.forEach(subjectName => {
      this.io.on(subjectName, (...data: Array<any>) => {
        this.publish(subjectName, ...data);
      });
      this.subscribe(subjectName, (...data: Array<any>) => {
        if (typeof middlewares[subjectName] !== "undefined") {
          this.io.emit(subjectName, (<any>middlewares[subjectName])(...data));
        } else {
          this.io.emit(subjectName, ...data);
        }
      });
    });
  }
}
