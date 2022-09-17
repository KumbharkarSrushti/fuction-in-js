// let message=(function(){
//     let name="sru ru";
//     return name;
// })();

// (function (words){
//     console.log(words);
// })("Hello worlds")

// let show =function(number){
//     if (number%2==0){
//         return "number is even"
//     }else{
//         return "number is odd"
//     }
// }
// console.log(show(2))

// let sumA=(a,b)=>{
//     return a+b
// }
// console.log(sumA(3,4))



// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// const d = new Date();
// d.getTime()
// ;
// console.log(d)

// const d = new Date();
// d.getFullYear();
// console.log(d)



// const users = ["John", "Marco", "Peter"];
// users.forEach(u => {
//   doSomething();
//   doSomethingElse();
//   // ...
//   // ...
//   // Here we have the WTF situation: WTF is `u` for?
//   register(u);
// });


const users = ["John", "Marco", "Peter"];
users.forEach(user => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  register(user);
});
