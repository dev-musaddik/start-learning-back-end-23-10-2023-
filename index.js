// // for (let index = 0; index <100; index++) {
// // console.log( index,":" ,'musaddik')

// // }
// const fs = require('fs')
// var data="im musaddik"
// var data2=" i'm an engineer"
// // fs.writeFileSync(+read.txt, data)
// fs.writeFileSync("read.txt", data)
// // fs.writeFileSync("read.txt",data2)
// fs.appendFileSync("read.txt", data2)

// // ______________get__________________________
// const get_data=fs.readFileSync("read.txt")
// console.log(get_data)//buffer type data .

// const buf_to_string=get_data.toString()
// console.log(buf_to_string)
// fs.unlinkSync("read_write.js");
// // ------------------remane file-------------------------
// // fs.renameSync("read_write.js","index.js")

// --------------async-----

// const fs=require("fs");
// fs.writeFile("async_write.txt","musaddik",(err) =>{
//     console.log('write_write')
//     console.log(err)
//     if(err===null){
//         console.log('i love you too,bracuse of err === null')
//     }

// })
// fs.appendFile("async_write.txt",'add something',(err)=>{
//     console.log('att')
// })
// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(data)
// })
// console.log('im first')

// const fs =require('fs')
// fs.mkdir('musaddik',(err)=>console.log(err))
// fs.writeFile("musaddik/bio.txt","hi! i'm musaddik ",(err)=>{console.log(err)})
// fs.appendFile('musaddik/bio.tx','i am a student of computer science ',(err)=>console.log(err))
// fs.readFile('musaddik/bio.txt','utf-8',(err,data)=>{
//     console.log(data)
//     console.log(err)

// })
// fs.rename('musaddik/bio.txt','musaddik/mybio.txt',(err)=>console.log(err))

// fs.unlink('musaddik/bio.txt',(err)=>console.log(err))
// fs.unlink('musaddik/mybio.txt',(err)=>console.log(err))

// -------------------------------------------os----------------------------

// const os = require('os')
// console.log(os.arch())
// console.log(os.freemem())
// const freeMemoryBytes = os.freemem();
// const freeMemoryGB = freeMemoryBytes / 1024/1024/1024; // 1 GB = 1,073,741,824 bytes

// console.log(`Free Memory: ${freeMemoryGB.toFixed(2)} GB`);
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.tmpdir())
// console.log(os.type())

// ----------------------path-----------------------

// const path=require('path');
// console.log(path.dirname('D:\Back-end(23-10-2023)\NodeJs\index.js'))
// console.log(path.extname('D:\Back-end(23-10-2023)\NodeJs\index.js'))
// console.log(path.basename('D:\Back-end(23-10-2023)\NodeJs\index.js'))

// console.log(path.parse('D:\Back-end(23-10-2023)\NodeJs\index.js'))

// const mypath=path.parse('D:\Back-end(23-10-2023)\NodeJs\index.js')
// console.log(mypath.root)
// console.log(mypath.ext)

// ------------------opr-----------------
// const {add,name}=require('./opr')
//  const sum=add(5,7)

//  console.log(sum,name)

// -------------------------npm node------------------
// // Before
// const chalk = require('chalk');

// After
// const validator=require('validator')
// const chalk = require('chalk');
// console.log(chalk.blue.inverse('Hello world!\n'));
// console.log(chalk.blue.underline('Hello world!'));
// console.log(chalk.blue.inverse('Hello world!\n'));

// const res=validator.isEmail('musaddikh13@gmail.com');
// console.log(res,'\n')
// console.log(res? chalk.green.underline(res):chalk.red.inverse(res))

// (function(){
//     return 5+5
// })();

// --------------------------create server -----------------------

// console.log(__dirname ,__filename)

// const http=require('http');
// const server=http.createServer((req, res) =>{

//     console.log(req.url)
//     if(req.url==="/about"){
//         res.end('this is about page ')

//     }
//     else  if(req.url==="/home" || req.url==="/"){
//         res.end('this is home page ')
//     }
//     else  if(req.url==="/contract"){
//         res.end('this is contract page ')
//     }
//     else  {
//         res.writeHead(404,{'Content-type':'text/html'} )
//         res.end('<h1 style="background: red;">this is 404</h1>')
//     }
// })

// server.listen(1000,'127.0.0.1',()=>{
//     console.log('test successful')
// })

//  -------------------------------JSON(javascript object notation) it's light wight-----------------------------
// const fs = require('fs');

// const bioData = {
//     name: 'musaddik',
//     professional: 'developer',
//     age: 18
// };

// const jsonData = JSON.stringify(bioData);

// fs.writeFile("jsonData.json", jsonData, (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//     } else {
//         console.log('Data has been written to jsonData.json');
//     }
// });
// fs.readFile('jsonData.json',"utf-8",(err,data) =>{
//     console.log(data)
//     console.log(JSON.parse(data))
//     console.log(JSON.parse(data).name)
// })

// --------------------------------------Api(application programming interfaces )----------------------------------
// const http = require("http");
// const fs = require("fs");

// // fs.readFile("myapi.json", "utf-8", (err, data) => {
// //   if (data) {
// //     console.log('api response');

// //   } else console.log(err);
// // });
// const getdata=fs.readFileSync(`${__dirname}/myapi.json`, "utf-8")
// const users = JSON.parse(getdata);

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/about") {
//     res.end("this is about page");
//   } else if (req.url === "/home" || req.url === "/") {

//       console.log("this is data", getdata);
//       console.log("this is users", users);
//       res.writeHead(200, { "Content-type": "application/json" });

//     res.end(getdata);

//   } else if (req.url === "/contract") {
//     res.writeHead(200, { "Content-type": "text/html" });

//        users.map((user) => res.write(`<h1>Name: ${user.name}</h1>`));
//       res.end();
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end('<h1 style="background: red;">this is 404</h1>');
//   }
// });
// server.listen(2000, "localhost");

// ----------------------------------------Events Module------------------------

// console.log('it is events module')

// const EventEmitter= require('events')
// const event= new EventEmitter();
// event.on("nameCell",()=> {
//     console.log('i am musaddik')                  // event fire
// })
// event.on("nameCell",()=> {
//     console.log('i am tazwer')                  // event fire
// })
// event.on("nameCell",()=> {
//     console.log('i am zaki')                  // event fire
// })
// event.emit("nameCell")     // one event cell multiple function

// event.on('statusCode',(status,mes)=> {
//     console.log(`status code ${status} process : ${mes}`)
// })
// event.emit("statusCode",200,'ok')

// -------------------------------streams and buffer----------------------

// ------------without stream-----------
// const fs = require("fs");
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   fs.readFile("input.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.statusCode = 500;
//       res.end("Internal Server Error");
//     } else {
//       res.setHeader("Content-Type", "text/plain");
//       res.end(data);
//     }
//   });
// });

// server.listen(2000, "localhost", () => {
//   console.log("Server is running on http://localhost:2000/");
// });


// ----------------with stream-----------------

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const rstream=fs.createReadStream('input.txt')
  rstream.on('data',(getdata) => {
    res.write(getdata)
    res.end();
  })
  rstream.on('end', () =>{
    console.log('readable stream')
    res.end();
  })
  rstream.on('error', (err) =>{
    console.log(err)
    res.end('not found');

  })
});

server.listen(2000, "localhost", () => {
  console.log("Server is running on http://localhost:2000/");
});