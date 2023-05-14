const os = require('os');


console.log('Total Memory', os.totalmem()); // ram size

console.log('Free Memory', os.freemem()); // free ram 

console.log('Version', os.version()); // Os version

console.log('System Info', os.cpus()); // number of cpus in the system

