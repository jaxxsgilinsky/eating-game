var dog = document.getElementById("dog");
var dogXVal = Number(dog.getAttribute("x"));
var dogYVal = Number(dog.getAttribute("y"));


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
})
