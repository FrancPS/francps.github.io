const Display = function (canvas) {
    this.buffer = document.createElement("canvas").getContext("2d");
    this.ctx = canvas.getContext("2d");

    this.drawRectangle = function (x, y, width, height, color) {
        this.buffer.fillStyle = color;
        this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
    };

    this.drawText = function (x, y, string, color) {
        this.buffer.fillStyle = color;
        this.buffer.fillText(string, Math.floor(x), Math.floor(y));
    };

    this.clearBuffer = function (color) {
        this.buffer.fillStyle = color;
        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
    };

    this.render = function () { this.ctx.drawImage(this.buffer.canvas, 0, 0); };

    this.resize = function (event) {
        //var width, height;

        //width = document.documentElement.clientWidth * 0.5;
        //height = document.documentElement.clientHeight * 0.5;
        

        //this.buffer.canvas.width = 1280; // Take these from game.world
        //this.buffer.canvas.height = 720;
    };
}