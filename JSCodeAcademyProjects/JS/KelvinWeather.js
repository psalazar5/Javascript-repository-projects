const kelvin = 293; //Wrote a constant Kelvin to illustrate the forecast today: 293 Kelvin and this variable will stay as a constant
const celcius = kelvin - 273; // here variable(const) is celcius , we subtract kelvins const to 273 which we here are converting from kelvin to celcius.

let fahrenheit = celcius * (9 / 5) + 32; //here we are using let expression to indicate we're making a formula equation to calculate Fahrenheit and then storing it in the variable fahrenheit
//let can be used to create global variables but let is block scoped and redeclaration is not allowed in the same scope. Block scope means the variable is accessible within the block that is between the {}.

//When you convert from Celsius to Fahrenheit, you often get a decimal number. So we're going to use the .floor() method from built in math object to round down the F temp and we're saving result to Fahrenheit V

fahrenheit = Math.floor(fahrenheit);
