const fs = require('fs')


// How to get or read the data from a file

// let data = fs.readFileSync('index.js', 'utf-8')

// console.log('Data from a file is ', data)





// How to Replace the Data from a file

// fs.writeFileSync('document.txt', 'icubecode')





// How to append text to the file


// fs.appendFileSync('document.txt', '\n Here is the new text added')



// How to rename the file


// fs.renameSync('document.txt', 'new-file.txt')




// How to Delete a file

// fs.unlinkSync('new-file.txt')




// How to Create a Directory

// fs.mkdirSync('src', { recursive: true })




// How to Read the current path files and directories

let data = fs.readdirSync('./')
console.log(data)

