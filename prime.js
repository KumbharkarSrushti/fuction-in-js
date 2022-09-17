function primeornot(user){
    var i=1
    var s=0
    while (i<user.length){
        if (user%1===0){
            console.log(i)
            s=s+1
        }
        i=i+1
    }
    if (s==2){
        console.log(user,"is a prime number")
    }
    else{
        console.log(user,"is not prime number")
    }
}
const input = require('readline-sync');
let user  = input.questionInt('Enter the number :- ');
(primeornot(user))
