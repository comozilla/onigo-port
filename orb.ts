export default class Orb {
  rawOrb: any;
  port: string;
  name: string;
  constructor(name: string, port: string, rawOrb: any) {
    this.name = name;
    this.port = port;
    this.rawOrb = rawOrb;
  }
}
