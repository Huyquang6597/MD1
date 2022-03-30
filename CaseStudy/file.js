let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let score = document.querySelector("#score");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let gameOver = document.querySelector("#gameOver");
let nhacNen = new Audio("hihihi.mp3")
nhacNen.loop=true

let playerScore = 0;

function start() {
//declearing variable for score
    let intervalS = null;


//function for score
    let scoreCounter = () => {
        playerScore++;
        score.innerHTML = `Score <b>${playerScore}</b>`;
    }

//start game
    window.addEventListener("keydown", (start) => {
        clearInterval(intervalS)
        //  console.log(start)
        if (start.code == "32") {
            gameOver.style.display = "none";
            block.classList.add("blockActive")
            road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite"
            cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite"
        }
        intervalS = setInterval(scoreCounter, 200);

    })


//jump your character
    function jump() {
        dino.classList.add("jump-animation");
        setTimeout(() => {
            dino.classList.remove('jump-animation');
            // jump-animation: nhảy hoạt cảnh
        }, 1000);
    }


// sự kiện liên kết phím ấn thả
    window.addEventListener('keypress', () => {
        if (!dino.classList.contains('jump-animation')) {
            jump();
        }
    });

//game Over if character hit the block

    setInterval(() => {
        const dinoTop = parseInt(getComputedStyle(dino).getPropertyValue("top"));

        const blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

        if (blockLeft < 0) {
            block.style.display = 'none';
        } else {
            block.style.display = '';
        }

        if (dinoTop > 250 && blockLeft > 35 && blockLeft < 70) {
            gameOver.style.display = "block";
            clearInterval(intervalS);
            alert("you got a score of:" + score.innerText + "\n\nPlay again?");
            location.reload();
            // block.classList.remove(block);
            //road.firstElementChild.style.animation = "none";
            //cloud.firstElementChild.style.animation = "none";
        }
    }, 10)
}
