function squares_of_numbers(limit){
    var output={}
    for(var i=1;i<=limit;i++){
        output[i]=i*i
    }
    console.log(output);
 }
const input = require('readline-sync');
let limit = input.questionInt('Enter the number :- ');
(squares_of_numbers(limit))
  

