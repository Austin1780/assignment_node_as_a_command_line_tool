/*1)Take the user input
  2)Convert it to string
  3)Split the user input and store in array
  4)Iterate through the array and check if each element has a character or a number
  5)If the elements having chars match a certain string value, it is mapped to itscorresponding function
  6)The elements that are numbers should be passed as arguments to the functions
  7)The mapping function should be inside a process that accepts stdin from the user
  8)If the first character is a '-', redirect to functions that give out info about calc.js
  */

  let calculator = require('./calc_module');


  let argsArray = process.argv.slice(2);
  let string = process.argv[2];
  // console.log(argsArray);
  let argument = argsArray[0];
  if(argument === '-v' || argument === '--version'){
    console.log("The version is 1.0.0");
  }
  if(argument === '-h' || argument === '--help'){
    console.log("Example: Result of calc.js add 1 2 would be 3");
  }

  var x = 0;
  while(x < (argsArray.length)){
    var result = 0;
    if (x === 0){
      if (isNaN(argsArray[x])){
        console.log("x: ",argsArray[x]);
        let arg1 = Number(argsArray[x+1]);
        console.log("arg1: ",arg1);
        let arg2 = Number(argsArray[x+2]);
        console.log("arg2: ",arg2);
        result = mapFunctions(argsArray[x],  arg1, arg2);
        console.log("if statement: ", result);
    }
  }else if (x > 0 && x < argsArray.length-1){
      if (isNaN(argsArray[x])){
        let str = argsArray[x];
        let arg1 = Number(argsArray[x+1]);
        let arg2 = Number(argsArray[x+2]);
        switch(str){
          case 'add':
            result += mapFunctions(str, arg1, arg2);
            return result;
          case 'sub':
            result -= mapFunctions(str, arg1, arg2);
            return result;
          case 'mult':
            result = result*mapFunctions(str, arg1, arg2);
            return result;
          case 'div':
            arg1 = result/arg1;
            result = mapFunctions(str, arg1, arg2);
            return result;
        }
      }

  }else{
    console.log("final result: ", result);
  }
    x++;
  }


  function mapFunctions(string, arg1, arg2){
      switch(string) {
        case 'add':
          return calculator.add(arg1, arg2);
        case 'sub':
          return calculator.sub(arg1, arg2);
        case 'div':
          return calculator.div(arg1, arg2);
        case 'mult':
          return calculator.multi(arg1, arg2);
      }
    }
