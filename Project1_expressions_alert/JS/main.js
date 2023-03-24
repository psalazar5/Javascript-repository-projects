window.alert("Hello, World!"); //alert window to pop up on website
var A = "This is a string"; //named a variable to A
document.write(A);
document.write("<br></br>");

var B = "This is a string2";
document.write(B);
document.write("<br>");

document.write(
  'Lisa told Bart ," Knock it off, Bart! Or I\'ll tell dad!"<br> "Eat my shorts!" Bart responded.'
);
document.write("<br>"); //documen.write displays a variable for instance
document.write(
  '"Be who you are and say what you feel,' +
    "because those who mind don't matter and those who matter don't mind.\"" +
    "-Dr. Seuss"
);
document.write("<br>");
var C = "This is the beginning of the string";
var D = "and this is the end of the string";
document.write(C + D);
document.write("<br>");
var Family = "The Arezzinis",
  Dad = "Jeremiah",
  Mom = "Hermoine",
  Daughter = "Penny",
  Son = "Zorro";
document.write(Dad); //document.write dad displayed what the value of "dad" which is "Jeremiah"

document.write(3 + 3);

function My_First_Function() {
  //Defining a function and naming it
  var str = "This is the button text!"; //Defining a variable and giving it
  //a string value
  document.getElementById("Button_Text").innerHTML = str; //putting the value
  //of the variable into the HTML elementFromPoint
  //with the "Button_Text"id
}
