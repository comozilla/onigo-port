import SocketManager from "./components/socketManager";
import SpheroManager from "./components/spheroManager";

const port: number = 8080;

console.log(`onigo-port is running on ${port}`);

new SocketManager(port);
new SpheroManager();
