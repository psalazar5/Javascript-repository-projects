//Ternary operator is "?" spits out which is greater or less and returns left or right
document.write(
  (Bigger = 5 > 1 ? "Left number is bigger" : "Right number is bigger")
);
document.write("<br>");
function Ride_Function() {
  //made Ride_Function a function
  var Height, Can_Ride; //we created two variables height and Can_Ride
  Height = document.getElementById("Height").value; //We assigned height to grab the input value. Value is "52" by default
  Can_Ride = Height < 52 ? "You are too short" : "You are tall enough"; //Assigned Can_Ride to see if Height < 52 then Can_Ride is equal to "you are too short".
  document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; //Grabs "Ride" Id and then displays the true or false statement the user inputs.
}
document.write("<br>");

function Age_Function() {
  //Created the function for age voting
  var Age, Can_Vote; //Described my two variables, one for age and one to see if they can vote
  Age = document.getElementById("Age").value; //Age = 18 from the input which user enters to get value from the input id
  Can_Vote = Age < 18 ? "You are not old enough." : "You are old enough"; //I made Can_Vote determine if Age is less than 18 to display you arent old enough and if they are then displays you are old enough.
  document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; // I made this so it can pull the p element to display the output of the answer.
}
//Line 19 ? its asking whether the age is less than or greater to 18 , if 18 u can vote if under 18 then displays the second statement.
//that was hard

//created a class of vehicle giving it its objects
//"this" represents indicates the object that is the owner of the code.
//"Vehicle" in this code is an object constructor.
//^Allows you to essentially create a placeholder of undetermined values until the new object is created from the object constructor.

function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
//When used with a function, the value of “this” is the object that possesses the function.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //new is used to create new objects
var Emily = new Vehicle("Jeep", "Track Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}
document.write("<br>");
//step136reservedkeywordchallenge//
//Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
//Create a person object
const myFather = new Person("John", "Doe", 50, "blue");
//Display age
document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ".";
document.write("<br>");

//This is a nested function
function count_Function() {
  //Named function "count_Function"
  document.getElementById("Counting").innerHTML = Count(); //Stated to grab Id from HTML and display function "Count" which is a function we are creating under this.
  function Count() {
    //^That inner HTML spits out <-- This function Count() we're about to create.
    var Starting_point = 9; //Named variable a starting point of integer 9
    function Plus_one() {
      Starting_point += 1; //Created a function where it increments by 1 since += is adding "1"
    }
    Plus_one(); // so it grabs starting_point which is 9, and grabs Function() which += 1 so 9+1=10
    return Starting_point; //returns the Starting_point and +=1 which is 9(Starting_point)+(Plus_one)=9+1=10
  } //The Plus_one function was the nested function
}
