import SocketManager from "./components/socketManager";
import SpheroManager from "./components/spheroManager";
import UUIDManager from "./components/uuidManager";

const port: number = 8080;

console.log(`onigo-port is running on ${port}`);

new SocketManager(port);
new SpheroManager();
new UUIDManager();