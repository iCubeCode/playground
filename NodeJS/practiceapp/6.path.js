const path = require('path')

// how to get the current path

console.log(path.dirname(__dirname))

// Join

console.log(path.join(__dirname, 'src', 'document.txt'))