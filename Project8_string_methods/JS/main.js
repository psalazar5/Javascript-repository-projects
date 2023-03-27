function full_Sentence() {
  //function full_Sentence
  var part_1 = "I have "; //made sentences with these seperate variables
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence";
  var whole_sentence = part_1.concat(part_2, part_3, part_4); //concat, connects two or more strings
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}
document.write("<br>");

//Slice method-
//string method that extracts a section of a string and then returns the extracted section in a new string.
function slice_Method() {
  var Sentence = "All work and no play makes Johnny a dull boy.";
  var Section = Sentence.slice(27, 33);
  document.getElementById("Slice").innerHTML = Section;
} //the numbers in slice indicate which characters in your string will be cut out and displayed.

//toUpperCase- String is converted to upper case
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.toUpperCase();
}
document.write("<br>");
//search method matches a string against a regular expression **
//returns the index (position) of the first match.
//method returns -1 if no match is found and is case sensitive.
let text = "Mr. Blue has a blue house";
let position = text.search("Blue");
document.getElementById("demo1").innerHTML = position;
document.write("<br>");

//Number Methods
function string_Method() {
  var X = 182;
  document.getElementById("Numbers_to_string").innerHTML = X.toString(); //returns a number as a string.
}
document.write("<br>");

//toPrecision method
function precision_Method() {
  //assigned function precision_Method to go inside the button onclick in html
  var X = 12938.3012987376112;
  document.getElementById("Precision").innerHTML = X.toPrecision(10); //grabbed html element id precision in p id.
} //toPrecision() method formats a number to a specified length. 10 characters

//toFixed() method convertrs a number to a string, rounds the string to a specified number of decimals.
let num = 5.6789; //let number
let n = num.toFixed(); //assigned variable n to equal to num
document.getElementById("demo2").innerHTML = n; //returns n to a string , rounded to a specified number = 6

//to valueOf method
{
  let num = 15;
  let m = num.valueOf();

  document.getElementById("demo3").innerHTML = m;
}
