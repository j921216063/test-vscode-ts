import http = require('http');
import app from './app';

let server = http.createServer(app);
let port = process.env.PORT || '3000';

server.listen(port, () => {
  console.log('============');
  console.log(`Server is listen: ${port}`);
  console.log('============');
});