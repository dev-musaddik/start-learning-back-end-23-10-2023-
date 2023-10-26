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

const fs =require('fs')
fs.mkdir('musaddik',(err)=>console.log(err))
fs.writeFile("musaddik/bio.txt","hi! i'm musaddik ",(err)=>{console.log(err)})
fs.appendFile('musaddik/bio.tx','i am a student of computer science ',(err)=>console.log(err))
fs.readFile('musaddik/bio.txt','utf-8',(err,data)=>{
    console.log(data)
    console.log(err)

})
fs.rename('musaddik/bio.txt','musaddik/mybio.txt',(err)=>console.log(err))

fs.unlink('musaddik/bio.txt',(err)=>console.log(err))
fs.unlink('musaddik/mybio.txt',(err)=>console.log(err))
