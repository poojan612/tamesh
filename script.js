const player = document.getElementById("player");
const gameContainer = document.getElementById("gameContainer");
let playerX = 170;
let score = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && playerX > 0) {
        playerX -= 20;
    } else if (event.key === "ArrowRight" && playerX < 340) {
        playerX += 20;
    }
    player.style.left = playerX + "px";
});

function createFallingBox() {
    const box = document.createElement("div");
    box.classList.add("fallingBox");
    box.style.left = Math.random() * 380 + "px";
    gameContainer.appendChild(box);

    let boxY = 0;
    const fallInterval = setInterval(() => {
        boxY += 5;
        box.style.top = boxY + "px";

        if (boxY > 470 && Math.abs(playerX - parseInt(box.style.left)) < 50) {
            score++;
            document.getElementById("score").textContent = score;
            clearInterval(fallInterval);
            gameContainer.removeChild(box);
        }

        if (boxY > 500) {
            clearInterval(fallInterval);
            gameContainer.removeChild(box);
        }
    }, 50);
}

setInterval(createFallingBox, 1000);
