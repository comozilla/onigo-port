var sphero = require("sphero");
var orb = sphero("7bb17ddbe33849e594f6bb481de272b7");

orb.connect(function() {
  console.log("connected!");
});