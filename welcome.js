
function is_equal_lenth(str1,str2){
    if(str1.length === str2.length){
        console.log("welcome",str1);
        console.log("welcome",str2);
    }
    else if(str1.length > str2.length){
        console.log("welcome",str1);
    }
    else{
        console.log("welcome",str2);
    }
 }
const input = require('readline-sync');
let str1 = input.question('Enter the name :- ');
let str2 = input.question('Enter the name :- ');
is_equal_lenth(str1,str2)
