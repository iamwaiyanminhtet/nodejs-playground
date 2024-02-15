const os = require('os');

console.log(os.platform()) // Linux
console.log(os.cpus()) // get an obj of cpu data
console.log(os.homedir()) // /home/username
console.log(os.freemem()) // the amount of remaining memory
console.log(os.totalmem()) // the amount of total memory
console.log(os.arch()) // x64 or x32(x86)
console.log(os.type()) // Linux