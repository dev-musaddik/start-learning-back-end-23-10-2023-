const chalk = require('chalk');

console.log("hello");

try {
  console.log(chalk.red('Hello, world!'));
} catch (err) {
  console.error(err);
}
