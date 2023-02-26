const http = require('http');

//  method use is create server
// 2 parameters req-incomeing request, from your webpage
// and res- is what we are sending back.

// const server = http.createServer((req,res)=>{
//  console.log(req)   

// the / means home page
// if(req.url ==='/'){
//     res.end('Welcome to our Home Page')
// }
// res.write('Welcome to our Home Page')
// res.end()
// })

const server = http.createServer((req,res)=>{
if(req.url === ' /'){
    res.end('Welcome to our Home Page')
}
if(req.url === '/about'){
    res.end('Here is the short history')
}
// else
res.end(`
<h1> OOPs!</h1>
<p> We can't seem to find the page </p>
<a href="/">back home</a> `

)

})







// we also need to tell server what port to listen to
server.listen(5000)

// important right now is the url address what client is requesting
