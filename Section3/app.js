const http = require('http');

const routes = require('./routes');
console.log(routes.someText);

// function rqListener(req, res) {
//     ...
// }
// http.createServer(rqListener);
const server = http.createServer(routes.handler);

server.listen(3000);