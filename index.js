

function flipCoin(){
    
    var randomNumber=Math.random()*2;
    randomNumber=Math.floor(randomNumber);
   
    if (randomNumber==0) {
       document.querySelector("p").innerText="You got the Head's";
       document.querySelector(".img1").setAttribute("src","./images/head.png");
       document.querySelector(".img1").setAttribute("src","./images/head.png");
        document.querySelector("img").style.width="25%";
    }else{
        document.querySelector("p").innerText="You got the Tail's";
        document.querySelector(".img1").setAttribute("src","./images/tail.png");
    }
}


flipCoin();