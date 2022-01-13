const Controller = function () {

    this.up = new Controller.ButtonInput();
    this.left = new Controller.ButtonInput();
    this.right = new Controller.ButtonInput();



    this.keyDownUp = function (type, key) {
        var down = (type == "keydown") ? true : false;
        switch (key) {
            case "a":
            case "ArrowLeft":
                this.left.getInput(down); break;
            case "w":
            case "ArrowUp":
                this.up.getInput(down); break;
            case "d":
            case "ArrowRight":
                this.right.getInput(down); break;
        }
    };

};

Controller.prototype = {
    constructor: Controller
};

Controller.ButtonInput = function () {
    this.active = this.down = false;
};

Controller.ButtonInput.prototype = {
    constructor: Controller.ButtonInput,

    getInput: function (down) {
        if (this.down != down) { this.active = down; }
        this.down = down;
    },
}