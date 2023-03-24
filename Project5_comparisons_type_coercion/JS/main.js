//Operator "typeof" gives the data type of a variable
document.write(typeof "Word"); //output would be "string"
document.write("<br>");
document.write(typeof 5); // or to output "number"<-- would actually spit this out
document.write("<br>");
document.write("10" + 5); //This would return 105 in the browser (it would tack “5” onto the string “10”).
document.write("<br>");
function my_function() {
  document.getElementById("Test").innerHTML = 0 / 0; //Result would be NaN because you cant divide 0 by 0.
  //you can check where or not something is a number by using the isNaN() function. For example doing "=isNaN('007')" would be true because 007 IS a nunber.
  //This would display true
}
document.write(2e310); //displays infinity
document.write("<br>");
document.write(-3e310); //displays -
document.write("<br>");
document.write(10 > 2); //displays ofc true
document.write("<br>");
document.write(10 < 2); //ofc displays false

console.log(2 + 2); //displays on console within dev tools
console.log(1023 * 2836);
console.log(10 > 2);
console.log(20 > 100);
document.write("<br>");

//When the “==” symbol is used to check for equality
//To obtain the ouput true we write:
document.write(10 == 10);
document.write("<br>");
//to obtain false we write:
document.write(3 == 11);
document.write("<br>");
//The === (triple equal sign) symbol is used to show that a comparison should be made.
X = 10;
Y = 10;
document.write(X === Y);
document.write("<br>");
//this returns true
P = 82;
O = "82";
document.write(X === Y);
document.write("<br>");
//This displays false. Why? Because the data types (number and string respectively) were not the same.
A = "Magnus";
B = "Magnus";
document.write(A === B);
document.write("<br>");
//true with same data types and same values
C = "90";
V = 90;
document.write(C === V);
document.write("<br>");
//returns false by writinga different data type but same values

//The && operator determines the logic between values or variables, such as verifying that ___ and ___ are true (both must be true to return “true.” If one or both is false, the code will return “false”).//
document.write(5 > 2 && 10 > 4); //This returns true
document.write("<br>");

//Or operator
document.write(5 > 10 || 10 > 4);
//This would return “true” because, while 5 is not greater than 10, 10 is greater than 4.
document.write("<br>");
document.write(5 > 10 || 10 > 20);
document.write("<br>");
//false here because neither is true, hence || checks to see if one is true out of the two and is false is both are false.

//!(not) operator checks whether or not something is true. If __ is false, "true" will be returned.
function not_Function() {
  document.getElementById("Not").innerHTML = !(20 > 10); //This would return False, which is basically returning the opposite.
  document.write("<br>");
} //If i wrote a false statement like 5 > 10 then true would be returned.
