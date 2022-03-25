let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");


//declearing variable for score
let interval = null;
let playerScore = 0;

//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

//start game
window.addEventListener("keydown", (start) => {
    //  console.log(start)
    if (start.code == "32") {
        gameOver.style.display = "none";
        block.classList.add("blockActive")
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite"
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite"
        //Score
        let playerScore = 0;

    }
    interval = setInterval(scoreCounter, 200);

})
//jump your character
function jump() {
    if (dino.classList !== "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 1000)
    }
}

/*
window.addEventListener("keydown", (evt) => {
    if (evt.key == "32")
        if (dino.classList !== "dinoActive") {
            dino.classList.add("dinoActive");

            //remove class after 0.5s
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500)
        }
});*/

let isAlive = setInterval(function () {
    //get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))

    //get current dino X position
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))


//va cham
    if (blockLeft < 50 && blockLeft > 100 && dinoTop >= 300) {

        alert("game over")
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});