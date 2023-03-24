function Function_Addition() {
  //defining a function
  var addition = 10 + 10; //assigning variable a value of addition
  document.getElementById("Math").innerHTML = "10 + 10 =" + addition;
  //use "" to make a string (^requires a string) within getElementId
}
function Sub() {
  //created a function and assigned sub to subtraction which is my end goal
  var subtract = 102 - 90; // explained "subtraction" as "subtract" I made it to equal the goal which is
  document.getElementById("subtraction").innerHTML = "102 - 90 = " + subtract; //getElements brings back to the Id of html
}

function Division() {
  //assigned the function division because we are dividing
  var division = 1000 / 10; //assigned the variable to div and giving it the value of the numbers we are going to divide which is "1000/10"
  document.getElementById("div").innerHTML = "1000 / 10 = " + division;
  //used "div" to make a string to go into html and grab the id assigned "div"
}

function multiply() {
  var multiplication = 10 * 10;
  document.getElementById("mult").innerHTML = "10 * 10 = " + multiplication;
}

function more_Math() {
  var simple_Math = ((1 + 2) * 10) / 2 - 5; //literally just more math but added my variable to var simple_Math
  document.getElementById("K").innerHTML =
    "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " +
    simple_Math;
}

function modulus_Operator() {
  //gave this function "moulus_Operator"
  var simple_Modulus = 25 % 6; //25 is the dividend and 6 is the divisor to get the remainder of this we use "% " to recieve remainder which is called a modulus operator
  document.getElementById("modulus").innerHTML = //gave this Id "modulus" to go into html file and grab that Id
    "When you divide 25 by 6 you have a remainder of : " + simple_Modulus;
}
function negation_Operator() {
  var x = 10;
  document.getElementById("negation").innerHTML = -x; // the negation operator is "-" followed bv the variable name
}

var T = 5;
T++; //increment
document.write(T);

document.write("<br>");

var w = 5.25;
w--; //decrement
document.write(w);

document.write("<br>");

//To return a random number between 0 and 1, you would write the following JavaScript code:
window.alert(Math.random());
window.alert(Math.random() * 100); //if you would like to have a random number displayed between ___ and ___ (such as between 0 and 100), you would write the following code:

const PI = Math.PI; //Math method
//console.log(PI.tofixed(2));

let min = Math.max(1, 2, 3, 100, 43, 7, 5000);
console.log(min);

let pow = Math.pow(5, 3);
console.log(pow);
document.write(pow);

console.log(math.floor(5.7)); //floor rounds down to the nearest integer
//Math object provides several methods for managing manipulating and formatting numbers.
