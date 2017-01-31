import * as io from "socket.io";
import { createServer, Server } from "http";
import ComponentBase from "./componentBase";

const subjectList: Array<string> = [
  "hoge"
];
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
        this.io.emit(subjectName, ...data);
      });
    });
  }
}