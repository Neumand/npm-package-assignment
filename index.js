var chalk = require("chalk");

var stopLights = [chalk.green("Go!"), chalk.yellow ("Slow down!"), chalk.red("Stop!")];
stopLights.forEach(function (signal) {
  console.log(signal)
})