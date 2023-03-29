function count_to_ten() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    //while this is less than 11, increment 1
    Digit += "<br>" + X; // Digit is empty, breaks line, then starts at 1 and increments by 1
    X++;
  }
  document.getElementById("Counting_to_Ten").innerHTML = Digit;
  console.log(X);
}

function Call_Loop() {
  var Number = "";
  var K = 0;
  while (K < 20) {
    Number += "<br>" + K;
    K++;
  }
  document.getElementById("Loop").innerHTML = Number;
}
//let length property returns the length of a string
{
  let text = "Hello World";
  let length = text.length;

  document.getElementById("demo").innerHTML = length;
}

var Instruments = [
  "Guitar",
  "Drums",
  "Piano",
  "Bass",
  "Violin",
  "Trumpet",
  "Flute",
];
var Content = "";
var Y;
function for_Loop() {
  //for loop while function "for_Loop"
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>"; //Y enters variable instruments, content is blank, but breaks each line
    //when content brings out the list it breaks each loop
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Arrays and objects
function cat_pics() {
  var Cat_Picture = []; //explaining the variables we are about to name below
  Cat_Picture[0] = "sleeping"; //Cat picture is the object. 0, 1, 2 , 3 , are the indexes
  Cat_Picture[1] = "playing"; // and the properties are "sleeping", "playing", "eating", and "purring".
  Cat_Picture[2] = "eating";
  Cat_Picture[3] = "purring";
  document.getElementById("Cat").innerHTML =
    "In this picture, the cat is " + Cat_Picture[2] + ".";
  //^ this would display "In this picture, the cat is eating."
}
//Array and objects
function array_Function() {
  var Car_Model = [];
  Car_Model[0] = "Mercedes";
  Car_Model[1] = "BMW";
  Car_Model[2] = "Subaru";
  Car_Model[3] = "Honda";
  document.getElementById("Array").innerHTML =
    "Pablo drives a " + Car_Model[2] + ".";
}

function constant_function() {
  const Musical_Instrument = {
    // we created an object with the const keyword and added a property w value
    type: "guitar",
    brand: "Fender",
    color: "black",
  }; //variable identifier cannot be reassigned
  Musical_Instrument.color = "blue"; //we changed the "black" value to the color property blue
  Musical_Instrument.price = "$1000"; //assigned the price 900 of the musical instrument
  document.getElementById("Constant").innerHTML =
    "The cost of the " +
    Musical_Instrument.type +
    " was " +
    Musical_Instrument.price;
}

//The let keyword declares variables that can have block scope. As a reminder, this refers to blocks of code contained within curly brackets
//The let keyword is very similar to var because they both declare variables.

var X = 82;
document.write("<br>" + X);
{
  let X = 33;
  document.write("<br>" + X);
}
document.write("<br>" + X);

document.write("<br>");

//return statement- stops the execution of a function and returns a value
function myFunction() {
  return Math.PI;
}
document.getElementById("demo2").innerHTML = myFunction();

//Here is an example of creating an object with properties and a method in JavaScript:
let car = {
  make: "Subaru ", //Methods are actions that can be performed on objects.
  model: "wrx sti ", //In JavaScript, they are stored within properties as functions.
  year: "2019 ", //One way to do this is utilizing the return statement and “this” keyword.
  color: "black ", //In this code, the properties are: make, model, year and color.
  description: function () {
    //The method is the description function
    return "The car is a " + this.year + this.color + this.make + this.model;
  },
};
document.getElementById("Car_Object").innerHTML = car.description();

//Javascript loop
let text = ""; //blank
for (let i = 0; i < 10; i++) {
  // start @0, till it gets to 10, increments by 1
  if (i === 5) {
    // current itteration/loop is 3  or thrid time thru
    break; //break the loop
  }
  text += "The number is " + i + "<br>"; //+= what it starts w and adds on
}

document.getElementById("demo4").innerHTML = text;

//The continue statement breaks one iteration (in the loop),
//if a specified condition occurs, and continues with the next iteration in the loop.
let text2 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text2 += "The number is " + i + "<br>";
}
document.getElementById("demo5").innerHTML = text2;
