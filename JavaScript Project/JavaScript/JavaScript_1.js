//The switch statement performs different actions based on the conditions presented to it.
//It is a type of conditional statement.
function Color_Function() {
  var Color_Output;
  var Colors = document.getElementById("Color_Input").value;
  var Color_String = " is a great color!";
  switch (Colors) {
    case "Red": //Inside switch statements are cases
      Color_Output = "Red" + Color_String;
      break; //These cases are the various conditions that are evaluated.
    case "Yellow":
      Color_Output = "Yellow" + Color_String;
      break;
    case "Green":
      Color_Output = "Green" + Color_String;
      break;
    case "Blue":
      Color_Output = "Blue" + Color_String;
      break;
    case "Pink":
      Color_Output = "Pink" + Color_String;
      break;
    case "Purple":
      Color_Output = "Purple" + Color_String;
      break;
    case "urmom":
      Color_Output = "urmom" + " is fake asf";
      break;
    default:
      Color_Output =
        "Please enter a color exactly as written on the above list.";
  } //If there is no case match, the default keyword is used to specify what code to run.
  document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
  var A = document.getElementsByClassName("Click");
  A[0].innerHTML = "The text has changed!"; //We have set the index value of variable A to 0
} //meaning it will now be displayed in the first element with the class “Click”
//(once the button is clicked)

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
//Create gradient
var grd = ctx.createRadialGradient(225, 310, 185, 250, 220, 25);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "white");
//Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(126, 60, 200, 120);

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.font = "35px Arial";
ctx.strokeText("Hello World", 135, 125);
