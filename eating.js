var duck = document.getElementById("duck");
var duckXVal = Number(duck.getAttribute("x"));
var duckYVal = Number(duck.getAttribute("y"));


document.addEventListener("keydown", function(e) {

  if (e.keyCode == 37) {
    duck.setAttribute("x",duckXVal - 15);
  duckXVal = duckXVal - 15;
  }

   else if (e.keyCode == 39) {
    duck.setAttribute("x",duckXVal + 15);
  duckXVal = duckXVal + 15;
  }


   else if (e.keyCode == 38) {
    duck.setAttribute("y",duckYVal - 15);
  duckYVal = duckYVal - 15;
  }

   else if (e.keyCode == 40) {
    duck.setAttribute("y",duckYVal + 15);
  duckYVal = duckYVal + 15;
  }
})
