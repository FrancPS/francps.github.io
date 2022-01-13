const Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 100;
    this.velocityX = 0;
    this.velocityY = 0;
    this.acceleration = 2;
    this.jumping = true;
    this.jumpPower = 50;

    this.color = "green"; //TODO: replace with sprites


    /*this.active = true;

    this.step = function () {
        // Movement
        if (this.active) {
            // Horizontal
            if (!leftKey && !rightKey || leftKey && rightKey) { // Slow down
                this.xVelocity *= this.friction;
            } else if (rightKey) {  // Move right
                this.xVelocity++;
            } else if (leftKey) {   // Move left
                this.xVelocity--;
            }

            // Vertical
            if (upKey) {
                // Todo: Check if on ground
                this.yVelocity = -50;
            }
            this.yVelocity += 5;    // Apply gravity

            // Correct velocity
            if (this.xVelocity > this.maxXVelocity) {
                this.xVelocity = this.maxXVelocity;
            } else if (this.xVelocity < -this.maxXVelocity) {
                this.xVelocity = -this.maxXVelocity;
            }

            this.xVelocity = Math.trunc(this.xVelocity);
            this.yVelocity = Math.trunc(this.yVelocity);

            // Collision Rects
            let horizontalRect = {
                x: this.x + this.xVelocity,
                y: this.y,
                width: this.width,
                height: this.height
            }

            let verticalRect = {
                x: this.x,
                y: this.y + this.yVelocity,
                width: this.width,
                height: this.height
            }

            // Check intersections
            for (let i = 0; i < worldElements.length; ++i) {
                let elementRect = {
                    x: worldElements[i].x,
                    y: worldElements[i].y,
                    width: worldElements[i].width,
                    height: worldElements[i].height
                }

                if (checkIntersection(horizontalRect, elementRect)) {
                    while (checkIntersection(horizontalRect, elementRect)) {
                        horizontalRect.x -= Math.sign(this.xVelocity);
                    }
                    this.x = horizontalRect.x;
                    this.xVelocity = 0;
                }
                if (checkIntersection(verticalRect, elementRect)) {
                    while (checkIntersection(verticalRect, elementRect)) {
                        verticalRect.y -= Math.sign(this.yVelocity);
                    }
                    this.y = verticalRect.y;
                    this.yVelocity = 0;
                }
            }

        }
    };
*/
};

Player.prototype = {

    constructor: Player,

    jump: function () {
        if (!this.jumping) {
            this.jumping = true;
            this.velocityY -= this.jumpPower;
        }
    },

    moveLeft: function () { this.velocityX -= this.acceleration; },
    moveRight: function () { this.velocityX += this.acceleration; },

    update: function () {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
};