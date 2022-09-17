function license_checker(speed){
    if (speed<=70){
        console.log("ok")
    }
    if (speed > 70){
        points=0
        for(var i=70;i<speed;i+=5){
            points+=1
        }
        if(points>12){
            console.log(points,"License suspended");
        }
        else{
            console.log(points);
        }
    }
 }
const input = require('readline-sync');
let speed = input.questionInt('Enter the number :- ');
(license_checker(speed))
 

