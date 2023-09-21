var randomNumber1 = Math.floor(Math.random()*6)+1;
randomNumber1=Math.floor(randomNumber1*6)+1;

var firstImageSrc="images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",firstImageSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var secondImageSrc="images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",secondImageSrc);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";

}
