const http = require('http');
const cookie = require('cookie');
const moment = require('moment'); 

// Create an HTTP server
const server = http.createServer((req, res) => {
if (req.url === '/set-cookie') {
    // Set a cookie
    const cookies = cookie.serialize('myCookie', 'Hello, Cookie!');
    res.setHeader('Set-Cookie', cookies);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Cookie set!');
} else if (req.url === '/get-cookie') {
    // Read a cookie
    const cookies = cookie.parse(req.headers.cookie || '');
    const myCookieValue = cookies.myCookie || 'Cookie not found';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Cookie Value: ${myCookieValue}`);
} else if (req.url === '/delete-cookie') {
    // Delete a cookie
    res.setHeader('Set-Cookie', cookie.serialize('myCookie', '', { expires: new Date(0) }));
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Cookie deleted!');
  } else if (req.url === '/current-time') {
    // Use moment to get the current time
    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Current Time: ${currentTime}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
