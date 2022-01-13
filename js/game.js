const Game = function () {

    this.world = {
        backgroundColor: "rgba(40, 48, 56, 1)",

        friction: 0.9,
        gravity: 5,

        player: new Player(100, 20),

        width: 1280,
        height: 720,

        worldCollision: function (object) {
            if (object.x < 0) { object.x = 0; object.velocityX = 0; }
            else if (object.x + object.width > this.width) { object.x = this.width - object.width; object.velocityX = 0; }
            if (object.y < 0) { object.y = 0; object.velocityY = 0; }
            else if (object.y + object.height > this.height) { object.y = this.height - object.height; object.velocityY = 0; object.jumping = false; }
        },

        update: function () {
            this.player.velocityY += this.gravity;
            this.player.update();

            this.player.velocityX *= this.friction;
            this.player.velocityY *= this.friction;

            this.worldCollision(this.player);
        }
    };

    this.update = function() { this.world.update(); };


};

Game.prototype = { constructor: Game };