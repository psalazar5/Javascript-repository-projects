//Global variable ex- can be accessed from any function within the program.
var X = 10;
function Add_Numbers_1() {
  document.write(20 + X + "<br>");
}
function Add_Numbers_2() {
  document.write(X + 100);
}
Add_Numbers_1();
Add_Numbers_2();

//Following would be local variable
function Add_Numbers_1() {
  var X = 10;
  document.write(20 + X + "<br>"); //This would display 30
}
function Add_Numbers_2() {
  //This function would not work with X because X is inside only Add_Numbers_1.
  document.write(X + 100);
}
Add_Numbers_1();
Add_Numbers_2();

//Let’s say you wrote the above code and didn’t understand why Add_numbers_2 didn’t display a result. We could use the console.log() method to help us debug our code as follows:
function Add_Numbers_1() {
  var X = 10;
  console.log(15 + X);
}
function Add_Numbers_2() {
  console.log(X + 100);
}
Add_Numbers_1();
Add_Numbers_2();
//If you executed this code in the browser, no result will be shown. But if you open the console, you’ll see the error “X is not defined.”

//Next
document.write("<br>");
//“If statements” are a type of conditional statement that specifies that a section of code is to be executed if a condition is true.
//Example:
if (1 < 2) {
  document.write("the left number is smaller than the number on the right.");
}

function get_Date() {
  //created function get_Date then created a get hour below with new Date and created a if statement.
  //the date().getHours method returns the hour in speciified date, for ex: 18 = 6:00pm, 12 is noon,etc.
  if (new Date().getHours() < 20) {
    //get hours 0-23hrs, there is getDay(0,6), there's get month(0-11), getFullYear()which is get year as a four digit number. in javascript january is month number 0, february is 1...
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}
document.write("<br>");

// if statement step 147 Error
//gonna ask for explaination
function getFullYear() {
  if (new Date().getFullYear() < 2024) {
    document.getElementById("Yes").innerHTML = "Breh";
  }
}
document.write("<br>");

//Else Statement
function Age_Function() {
  //Assigned function "Age_Function"
  Age = document.getElementById("Age").value; // grabbed input id from html grabbing value from the input id.
  if (Age >= 18) {
    //if age >= 18, executes this vote if statement
    Vote = "You are old enough to vote!";
  } else {
    //Else if , additional if statement if the first if isnt met
    Vote = "You are not old enough to vote!"; //This would return
  }
  document.getElementById("How_Old_Are_You").innerHTML = Vote; //grabs which ever one is actually met.
} //How_Old_Are_You is the p id element from inner HTML.

//Else if statement
function Time_Function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  } else if (Time >= 12 == Time < 18) {
    //need more explaination
    Reply = "It is afternoon.";
  } else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_Day").innerHTML = Reply;
}
