class Calculator{
  constructor(){
    }
    add(numbers){
      let sum = numbers[0];
      for(var i = 1; i < numbers.length; i++){
        sum += numbers[i];
      }
      return sum;
    }

    sub(numbers){
      let difference = numbers[0];
      for(var i = 1; i < numbers.length; i++){
        difference -= numbers[i];
      }
      return difference;
    }

    div(numbers){
      let division = numbers[0];
      for(var i = 1; i < numbers.length; i++){
        division = division / numbers[i];
      }
      return division;
    }

    multi(numbers){
      let product = numbers[0];
      for(var i = 1; i < numbers.length; i++){
        product = product * numbers[i];
      }
      return product;
    }
  }

  module.exports = Calculator;
