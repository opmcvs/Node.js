// const names = require('./app2module')

// const sayHi = require('./app2moduleutility')

// const data = require('./exportasyougo')

// require('./mindgrenade')
// sayHi('Suma')
// sayHi(names.john)
// sayHi(names.peter)

// OS module to let node know its built in ('os')
const os = require('os')
// you can also destructure this

// info about current user
const user = os.userInfo()
console.log(user);

// method how long the system computer in seconds has been running
const uptime = os.uptime();
console.log(uptime);

// Or 
console.log(`The system Uptime is ${os.uptime()} seconds`);

// current os
const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);


