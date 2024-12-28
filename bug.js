const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The above code is missing error handling and it may cause unexpected behavior
//Example: If the server fails to start or there is a problem in request handling, 
//the program may crash without providing any information. 
//This can make it difficult to debug and identify issues.