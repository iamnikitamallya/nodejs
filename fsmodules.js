// const fs = require("fs");
// const sum = require('./commonjsmodule') //importing syntax in commonjs
import fs from "fs"
import {userAddress} from "./es6module.mjs"

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     // console.log(err, data)
// })

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());

// console.log(sum())

const b = fs.writeFile("file2.text", userAddress(), () => {
  console.log(userAddress());
});


// console.log("This is a nodejs beginner project")