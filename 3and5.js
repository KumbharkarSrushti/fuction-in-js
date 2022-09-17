function multiplesOfNumbers(limit){
    var sum=0
    for(i=0;i<=limit;i++){
        if(i%3 ===0){
            sum+=i;
        }
        if(i%5 ==0){
            sum+=i;
        }
    }
    console.log(sum);
}
const input = require('readline-sync');
let limit = input.questionInt('Enter the num :- ');
(multiplesOfNumbers(limit))
 
