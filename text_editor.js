let fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();
  fs.writeFile('./data/input.txt', str, 'utf-8', (err, str) => {
    if (err) throw err;
  })
  if (str === '\\q') {
    console.log('Goodbye.');
    process.stdin.pause();
  }
})
