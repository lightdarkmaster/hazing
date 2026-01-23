// Game Name: Snake
// Game Description: A classic game of snake where the user is supposed to eat the food and grow the snake length

// Game Variables
let snakeLength = 1;
let snakeX = 10;
let snakeY = 10;
let foodX = Math.floor(Math.random() * 50);
let foodY = Math.floor(Math.random() * 50);
let score = 0;
let direction = "right";

// Game Functions
function drawSnake() {
    let snakeBody = [];
    for (let i = 0; i < snakeLength; i++) {
        snakeBody.push([snakeX - i, snakeY]);
    }
    return snakeBody;
}

function drawFood() {
    return [foodX, foodY];
}

function updateSnake() {
    let newHeadX = snakeX;
    let newHeadY = snakeY;
    if (direction === "right") {
        newHeadX += 1;
    } else if (direction === "left") {
        newHeadX -= 1;
    } else if (direction === "up") {
        newHeadY -= 1;
    } else if (direction === "down") {
        newHeadY += 1;
    }
    if (newHeadX === foodX && newHeadY === foodY) {
        snakeLength++;
        score++;
        foodX = Math.floor(Math.random() * 50);
        foodY = Math.floor(Math.random() * 50);
    }
    snakeX = newHeadX;
    snakeY = newHeadY;
}

function checkCollision() {
    if (snakeX < 0 || snakeX >= 50 || snakeY < 0 || snakeY >= 50) {
        return true;
    }
    for (let i = 0; i < snakeLength - 1; i++) {
        let snakeBody = drawSnake();
        if (snakeBody[i][0] === snakeX && snakeBody[i][1] === snakeY) {
            return true;
        }
    }
    return false;
}

function scoreCount(){
    return score;
    for(let i=0; i<score;i++){
        console.log("Score: " + score);
    }
}

// Game Loop
setInterval(function() {
    updateSnake();
    if (checkCollision()) {
        alert("Game Over. Your score is " + score);
        return;
    }
    const snakeBody = drawSnake();
    const food = drawFood();
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";
    snakeBody.forEach(function(element) {
        const snakeElement = document.createElement("div");
        snakeElement.className = "snake";
        snakeElement.style.top = element[1] * 10 + "px";
        snakeElement.style.left = element[0] * 10 + "px";
        gameBoard.appendChild(snakeElement);
    });
    const foodElement = document.createElement("div");
    foodElement.className = "food";
    foodElement.style.top = food[1] * 10 + "px";
    foodElement.style.left = food[0] * 10 + "px";
    gameBoard.appendChild(foodElement);
}, 100);
