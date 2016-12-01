function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

var dog = document.getElementById("dog");
var dogXVal = Number(dog.getAttribute("x"));
var dogYVal = Number(dog.getAttribute("y"));
var foodEaten = 0;
var height = 40;
var width= 40;


document.addEventListener("keydown", function(e) {

  if (e.keyCode == 37) {
    dog.setAttribute("x",dogXVal - 15);
  dogXVal = dogXVal - 15;
  }

   else if (e.keyCode == 39) {
    dog.setAttribute("x",dogXVal + 15);
  dogXVal = dogXVal + 15;
  }


   else if (e.keyCode == 38) {
    dog.setAttribute("y",dogYVal - 15);
  dogYVal = dogYVal - 15;
  }

   else if (e.keyCode == 40) {
    dog.setAttribute("y",dogYVal + 15);
  dogYVal = dogYVal + 15;
}

  var ballX = Number(document.getElementById("food1").getAttribute("x"))
  var ballY = Number(document.getElementById("food1").getAttribute("y"))

  if (dogXVal > ballX && dogXVal < ballX + width && dogYVal > ballY && dogYVal < ballY + height) {
    var randX = randomNumber(50,700)
    var food1 = document.getElementById("food1")
    food1.setAttribute("x", randX)
    foodEaten = foodEaten + 1
    document.getElementById("score").textContent = foodEaten
    console.log("overlap");
  }

  ballX = Number(document.getElementById("food2").getAttribute("x"))
  ballY = Number(document.getElementById("food2").getAttribute("y"))

  if (dogXVal > ballX && dogXVal < ballX + width && dogYVal > ballY && dogYVal < ballY + height) {
    var randX = randomNumber(50,700)
    var food2 = document.getElementById("food2")
    food2.setAttribute("x", randX)
    foodEaten = foodEaten + 1
    document.getElementById("score").textContent = foodEaten
    console.log("overlap");
  }

  if(foodEaten == 5) {
    document.getElementById("screen").pauseAnimations()
    var timeStop = Date.now()
    var timeDuration = timeStop-timeStart
    timeDuration = timeDuration/1000
    document.getElementById("totaltime").textContent = foodEaten
  }

})
