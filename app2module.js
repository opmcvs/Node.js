const john = `john`
const peter = `peter`
// local can't be access anywhere except locally
const secret = `super secret`

// console.log(module);- this is to check if working
module.exports = {john ,peter}
//  this is using es6 because john is the const name and peter.
//  after this now can access anywhere.