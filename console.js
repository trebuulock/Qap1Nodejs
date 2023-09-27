// Demonstrating various console methods

// Basic logging
console.log('This is a basic log.');

// Logging errors
console.error('This is an error message.');

// Using placeholders
console.log('Hello, %s!', 'Node.js');

// Measuring time
console.time('Timer');
setTimeout(() => {
console.timeEnd('Timer');
}, 1000);

// Displaying an object
const sampleObject = { name: 'John', age: 25 };
console.dir(sampleObject);
