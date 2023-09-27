// Using the Buffer module to manipulate binary data

// Creating a buffer from a string
const buffer = Buffer.from('Hello, Node.js!');

// Display the buffer content and length
console.log('Buffer Content:', buffer.toString());
console.log('Buffer Length:', buffer.length);

// Modifying the buffer
buffer.write('Modified Text', 0);
console.log('Modified Buffer Content:', buffer.toString());
