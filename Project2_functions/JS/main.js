var foo = document.getElementsByTagName("p"); //variable foo would contain a collection of all paragraph(p) tags in the document.

function My_Second_Function() {
  //defining the function and naming it
  var str = "Wow"; //defining a variable and assigning it a string value
  var str1 = "Why?";
  document.getElementById("button").innerHTML = str + " " + str1; //putting the value of the variable in the getelement point
}

function myFunction() {
  var sentence = "I am learning";
  sentence += "a lot from this book!";
  document.getElementById("concatenate").innerHTML = sentence;
}

//Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(12, 12);

function addition_Function() {
  var addition = 2 + 2;
  document.getElementById("Math").innerHTML = "2 + 2= " + addition;
}
