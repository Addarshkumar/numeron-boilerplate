// Iteration 5: Store the player score and display it on the game over screen

let scoreBox=document.getElementById("score-board")
let value=localStorage.getItem("score")
scoreBox.textContent=value;

var playAgain=document.getElementById("play-again-button");
playAgain.onclick=()=>{
    location.href="./game.html","_self"
}

