function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 100;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.maxXVelocity = 10;
    this.friction = 0.6;
    
    this.active = true;

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

            // Update position
            this.x += this.xVelocity;
            this.y += this.yVelocity;
        }
    }

    this.draw = function() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}