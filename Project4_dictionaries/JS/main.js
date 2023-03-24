function my_Dictionary() {
  //Assigned function name to "my_Dictionary"
  var Animal = {
    //gave the variable animal and gave it its properties of the animal
    Species: "Dog",
    Color: "Black",
    Breed: "German-shepherd",
    Age: 7,
    Sound: "Bark!",
  };
  delete Animal.Age; // this would make the output of the code come out to "undefined"
  document.getElementById("Dictionary").innerHTML = Animal.Age; //asked to spit back out the age of the animal
}
