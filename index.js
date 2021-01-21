var randomNumber1 = Math.random()*6;
randomNumber1 = randomNumber1+1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random()*6;
randomNumber2 = randomNumber2+1;
randomNumber2 = Math.floor(randomNumber2);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
// document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";

}
