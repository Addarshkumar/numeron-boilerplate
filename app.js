// Iteration 1: Make the Play button functional.
var btn=document.getElementById("play-button")
// Description: When the Play button is clicked the game page should be displayed.
btn.addEventListener("click",redirect)
    function redirect(){location.href = "./game.html";
}