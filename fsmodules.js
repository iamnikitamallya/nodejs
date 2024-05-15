const fs = require("fs");
const sum = require('./commonjsmodule')

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     // console.log(err, data)
// })

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());

// console.log(sum())

const b = fs.writeFile('file2.text', sum(), () => {
    console.log(sum())
})


// console.log("This is a nodejs beginner project")