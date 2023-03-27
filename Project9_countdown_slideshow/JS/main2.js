function countdown() {
  //created the function countdown
  var seconds = document.getElementById("seconds").value;

  function tick() {
    //created another function within the countdown function
    seconds = seconds - 1; //seconds going down by 1
    timer.innerHTML = seconds; //sets p=id"timer" the function tick
    var time = setTimeout(tick, 1000); //means that the program is pausing for 1,000 milliseconds ie 1 second
    if (seconds == -1) {
      alert("Times's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick();
}
