# Node.js HTTP Server with Unhandled Errors
This repository demonstrates a simple Node.js HTTP server that lacks proper error handling. The server is implemented using the `http` module and listens on port 8080. 

## Bug
The primary issue is the absence of error handling. If the server encounters an error (e.g., port already in use, network issue), it crashes without providing any informative error messages. This makes debugging and identifying the root cause of the failure difficult.

## Solution
The solution involves adding error handling to gracefully handle potential issues. This includes using `server.on('error', ...)` to catch errors during server startup and using `try...catch` blocks within request handlers to manage errors during requests.

## How to run
1. Clone the repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to start the server with the bug.
4. Run `node bugSolution.js` to start the server with the solution. 

## License
[MIT](https://opensource.org/licenses/MIT)