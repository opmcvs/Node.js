//  this is the syn ones

// with out destructuring
// const fs = require('fs');
// fs.readFileSync

// destructuring direct to the object method.
const {readFileSync,writeFileSync} = require('fs');
//  readFileSync has 2 parameters
// path and the encoding to decode file usually utf8.

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
 console.log(first,second);

//  to write a file
// if the file is not there it will create it for you.
// if the file already exist it will overide the values in it. 
// the TESTKING-SYNC inside is you can name it whatever you want.

// writeFileSync('./content/testking-sync.txt',`Here is the result my lord.
// ${first} , ${second}`)

// writeFileSync('./content/testking-sync.txt',`Here is the  new result my king.
// ${first} , ${second}`)

// to append a file
writeFileSync('./content/testking-sync.txt',`Here is the  new result my king.
${first} , ${second}`,{flag:'a'})
