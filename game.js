var randomNumber=Math.round(Math.random()*100);
var submitButton=document.getElementById("submit");
var message=document.getElementById("message");
var lives=document.getElementById("lives");
var msg;
var lives;

submitButton.onclick = () =>
{
    let inputNumber=document.getElementById("number-input").value;
    lives--;
    if(inputNumber==randomNumber){
        location.href="win.html";
    }
    else if(inputNumber>randomNumber){
        msg="Oops! you guess is high!";
    }
    else if(inputNumber<randomNumber)
    {
        msg="Oops! you guess is low!";
    }
    else if(lives==0){
        location.href="loss.html";
    }
    message.style.display="inherit";
    message.innerHTML=msg;
    lives.innerHTML=msg;
}

const startButton=document.getElementById("reset");

startButton.onclick = () => {
    location.href="./index.html";
}