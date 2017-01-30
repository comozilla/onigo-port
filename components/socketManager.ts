import publisher from "../eventPublisher";
import * as io from "socket.io";
import { createServer, Server } from "http";

export default class SocketManager {
  private server: Server;
  private io: SocketIO.Server;
  constructor(port: number) {
    this.server = createServer();
    this.server.listen(port);

    this.io = io(this.server);
  }
}