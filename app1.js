// modules- encapsulated code (only share mininum)
// Common Js - every file in node is a module (by degault)
// const john = `john`
// const peter = `peter`
 
// const sayHi= (name)=>{
//     console.log(`Helo there ${name}`)
// }

// sayHi( `suma`);
// sayHi(`john`);

// to access the module export you can use require store
//  it in a variable
// run the file where the require is found.


const names = require('./app2module')

const sayHi = require('./app2moduleutility')
 console.log(names)
sayHi('Suma')
sayHi(names.john)
// ReferenceError: john is not defined
// to fix this error either destructure or props
// names.john
 sayHi(names.peter)

//  to fix potential issue you might need destructuring
// const  {john,peter} = require('./app2module')
// sayHi(peter)

// for the alternative to import
const data = require('./exportasyougo')
console.log(data);

// Mind Grenade
// if we set up a function inside of a module
// it will run like the example below
require('./mindgrenade')

