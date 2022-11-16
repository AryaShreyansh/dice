//for dice 1:

var random1= Math.floor((Math.random()*6))+1;

if (random1===1) {
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
} else if(random1===2){
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
} else if(random1===3){
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
} else if(random1===4){
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
} else if(random1===5){
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
}
// these lines of codes can be shortened by writing:
/*
var randomDiceImage= "images/dice"+random1+".png" --> this stored the images from 1 to 6 altogether.
*/

//for dice 2:
var random2= Math.floor((Math.random()*6))+1;

if (random2===1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if(random2===2){
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
} else if(random2===3){
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
} else if(random2===4){
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
} else if(random2===5){
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
}


if (random1 > random2) {
  document.querySelector("h1").innerHTML="Player 1 Won 🚩!!";
}else if(random2> random1){
  document.querySelector("h1").innerHTML="Player 2 Won 🚩!!";
}
else {
  document.querySelector("h1").innerHTML="DRAW !!";
}
