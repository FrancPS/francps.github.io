// Initialise canvas variables
var canvas;
var ctx;

// Initialise input variables
var upKey;
var downKey;
var leftKey;
var rightKey;

// Initialise game variables
var gameLoop;
var player;
var worldElements = [];

window.onload = function() {
    // Assign canvas and context variables
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    ctx.font = "20px Courier New";

    // Setup key input listeners
    setupInputs();

    // Create player
    player = new Player(100, 400);

    // Create world elements
    for (let i = 0; i < 6; ++i) {
        worldElements.push(new WorldElement(0+100*i, 620, 100, 100, 1))
    }
    worldElements.push(new WorldElement(0, 520, 100, 100, 2));

    // Start game loop
    gameLoop = setInterval(step, 1000 / 30);
    
}

function step() {
    // Step player
    player.step();

    // Draw everything
    draw();
}

function draw() {
    // Clear canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.fillStyle = "white";
    ctx.fillText("Awesome presentation under development :)", 100, 90);

    // Draw player
    player.draw();
    // Draw world elements
    for (let i = 0; i < worldElements.length; ++i) {
        worldElements[i].draw();
    }
}

function setupInputs() {
    document.addEventListener("keydown", function (event) {
        if (event.key == "w" || event.key == "ArrowUp") {
            upKey = true;
        } else if (event.key == "a" || event.key == "ArrowLeft") {
            leftKey = true;
        } else if(event.key == "s" || event.key == "ArrowDown") {
            downKey = true;
        } else if(event.key == "d" || event.key == "ArrowRight") {
            rightKey = true;
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.key == "w" || event.key == "ArrowUp") {
            upKey = false;
        } else if (event.key == "a" || event.key == "ArrowLeft") {
            leftKey = false;
        } else if (event.key == "s" || event.key == "ArrowDown") {
            downKey = false;
        } else if (event.key == "d" || event.key == "ArrowRight") {
            rightKey = false;
        }
    });
}

function checkIntersection(r1, r2) {
    if (r1.x >= r2.x + r2.width) {
        return false;
    } else if (r1.x + r1.width <= r2.x) {
        return false;
    } else if (r1.y >= r2.y + r2.height) {
        return false;
    } else if (r1.y + r1.height <= r2.y) {
        return false;
    } else {
        return true;
    }
}