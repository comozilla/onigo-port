var sphero = require("sphero");
var noble = require("noble");

noble.on("stateChange", state => {
  if (state === "poweredOn") {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on("discover", peripheral => {
  console.log(peripheral.advertisement.localName, peripheral.uuid);
});
