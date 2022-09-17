function voting(eligibleforvoting){
    if (eligibleforvoting>=18){
        console.log("you are eligible")
    }
    else{
        console.log("not elgible")
    }
}
const input = require('readline-sync');
let eligibleforvoting = input.questionInt('Enter the name :- ');
(voting(eligibleforvoting))

