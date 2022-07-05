var name = 'Ram'
var city="pune"
var email="ramji@gmail.com"
var phone=995426343784
var roll;

console.log("----------------------------")
console.log("Declaration example");
 console.log(name + " " + city + " " + email + " "+ phone + " "+  roll);


//  Data Type
console.log(typeof name + " " + typeof city + " "+ typeof phone +" "+ roll +" "+ typeof java)
console.log("----------------------------")
console.log("Function In JavaScript");


// Function

function function_name(){
      var x = "Geekster";
      var y = "GurGawn";
      console.log(x + " " + y);

}function_name(); // multiple time call multiple time Print

console.log("----------------------------")
console.log("Pass input to function");

function add(x,y){
      var num1 = 10;
      var num2 = 20;
      var add = num1+num2;
      console.log(add);

} add();

console.log("----------------------------")
console.log("jump statement");

function add2(a1,a2,a3){
      var a1=a1;
      var a2=a2;
      var a3=a3;
      var a4 = a1+a2+a3;
      return a4;

}var a4 = add2(1,2,3);
console.log(add2)

console.log("----------------------------")
console.log("Croud Operation");
var brand={
      b1:'Apple',
      b2:'samsung',
      b3:'vivo'
}
console.log(brand.b1);
console.log(brand.b2);
console.log(brand.b3);

// insert new properties
console.log("----------------------------")
console.log("insert New Properties");
console.log(brand);
brand.b4='oppo',
console.log(brand.b4);


//update
console.log("----------------------------")
console.log("Update");
brand.b2='Pooco'
console.log(brand.b2);
console.log(brand);


console.log("----------------------------")
console.log("Delete Properties");
delete brand.b3;
console.log(brand);


console.log("----------------------------")
console.log("ARRAY");
var produtc = ['Apple', 'Life Good','Electronic',9000, true];
console.log(produtc);
console.log(produtc[2]); //access indexing
console.log(produtc[3]);  //access indexing
console.log(produtc[6]); //undefined
// adding element
produtc.push("this is Updated")
console.log(produtc);
//add ele first position
produtc.unshift('Geek');
produtc.unshift('GurGawn');
console.log(produtc);
//Find length
console.log(produtc.length);
//remove last element
produtc.pop();
console.log(produtc);
 //shift remove first element
 produtc.shift();
 console.log(produtc);

//Remove last element
produtc.pop();
console.log(produtc);
//shift Remove first element
produtc.shift();
console.log(produtc);












