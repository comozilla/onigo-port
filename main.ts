import SocketManager from "./components/socketManager";

const port: number = 8080;

console.log(`onigo-port is running on ${port}`);

new SocketManager(port);