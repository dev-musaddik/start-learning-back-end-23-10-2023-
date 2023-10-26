 const add=(a,b)=>{
    return a+b
}
const name='musaddik'

// module.exports.add =add
// module.exports.name=name
const chalk =require('chalk')

console.log(chalk.blue('Welcome'))
module.exports={add,name}