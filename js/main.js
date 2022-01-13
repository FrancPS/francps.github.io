
window.addEventListener("load", function (event) {
    "use strict";

    ////////////////
    // FUNCTIONS  //
    ////////////////

    var render = function () {
        display.clearBuffer(game.world.backgroundColor);
        display.drawRectangle(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
        display.drawText(game.world.player.x, game.world.player.y, "I'm on my path to be a Game!", "white");
        display.render();
    }

    var update = function () {
        if (controller.left.active) { game.world.player.moveLeft(); };
        if (controller.right.active) { game.world.player.moveRight(); };
        if (controller.up.active) { game.world.player.jump(); controller.up.active = false; };
        game.update();
    }

    var keyDownUp = function (event) {
        controller.keyDownUp(event.type, event.key);
    };

    var resize = function (event) { }

    ////////////////
    //  OBJECTS   //
    ////////////////

    /* The controller handles user input */
    var controller = new Controller();

    /* The display handles window resizing, and the on-screen canvas. */
    var display = new Display(document.querySelector("#gameCanvas"));

    /* The game holds all the game logic. */
    var game = new Game();

    /* Te engine is where the previous elements interact. */
    var engine = new Engine(1000 / 30, render, update);



    ////////////////
    // INITIALIZE //
    ////////////////

    // Scale the graphic canvas to the
    display.buffer.canvas.width = game.world.width;
    display.buffer.canvas.height = game.world.height;

    window.addEventListener("resize", resize);
    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup", keyDownUp);

    display.resize();
    engine.start();
});








/*


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
    ctx.font = "20px Courier New";

    // Setup key input listeners
    setupInputs();

    // Create player
    player = new Player(100, 400);

    // Create world elements
    // TO ARRANGE: 1 tile = 40x40
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
*/