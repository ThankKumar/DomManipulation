//Syncranous exampple because js is running linr by line
console.log("I ");
console.log("Love ");
console.log("eating");

//a syncronus code
console.log("------------------------");
console.log("Asyns");
console.log("------------------------");
//setTimeout(function , time):- it allow to run a function after specific time

setTimeout(() => {
      console.log('Ice cream');
}, 0);
console.log("I");

function x(){
      console.log("Love eating")
}
setTimeout(x,3000);






