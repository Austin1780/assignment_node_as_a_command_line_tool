let cp = require('child_process');

process.stdin.on('data', function(input) {
  input = String(input).trim();
  console.log(input);
  if (input === 'q' || input === 'quit') {
    process.exit();
  } else {
    let [cmd, ...args] = input.split(' ');

    let cmd1 = cp.spawn(cmd, args);

    cmd1.on('error', (err) => {
      console.error(`${ err.stack }`);
    });

    cmd1.stdout.on('data', (data) => {
      console.log(`Data: ${ data }`);
    });

    cmd1.stderr.on('data', (data) => {
      console.error(`STDERR: ${ data }`);
    });

    cmd1.on('close', (code) => {
      console.log(`Child process exited with code: ${ code }`);
    });
  }
});
