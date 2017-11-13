let fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

let str1 = "";

process.stdin.on('data', function(str) {
  str = str.trim();

  if (str === '\\q') {
    console.log('Goodbye.');
    fs.writeFile('./data/input.txt', str1, 'utf-8', (err, str) => {
      if (err) throw err;
      process.stdin.pause();
    });
  }

  str1 += str;

})
