const Engine = function (framerate, render, update) {

    this.animationFrameRequest = undefined,     // ref to AFR
    this.time = undefined,                      // the most recent timestamp of loop execution
    this.timeStep = framerate,                  // 1000/30 = 30 fps

    this.updated = false;                       // Wether or not the Update function has been called since the last cycle

    this.update = update;
    this.render = render;

    this.run = function (timeStamp) {
        this.accumuatedTime += timeStamp - this.time;
        this.time = timeStamp;

        if (this.accumuatedTime >= this.timeStep * 3) {
            this.accumuatedTime = this.timeStep;
        }

        while (this.accumuatedTime >= this.timeStep) {
            this.accumuatedTime = this.timeStep;
            this.update(timeStamp);
            this.updated = true;
        }

        if (this.updated) {
            this.updated = false;
            this.render(timeStamp);
        }

        this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);

    };


    this.start = function () {
        setInterval(update, framerate);
        setInterval(render, framerate);
    };

}