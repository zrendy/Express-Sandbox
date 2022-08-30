const http = require('http');
const lodash = require('lodash');

console.log(lodash.flattenDeep([1,2,[3,4]]));
const server = http.createServer((req, res) => {

  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.write('CHICKENNN');
  res.write('<p>HAHAHAHHA</p>')
  res.end();npm
})

// server.listen(3000, ()=>{
//   console.log('listening on port 3000!!')
// });