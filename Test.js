var World = require("./lib/artemis/World.js"),
    MovementSystem = require("./lib/artemis/systems/MovementSystem.js"),
    RotationSystem = require("./lib/artemis/systems/RotationSystem.js"),
    RenderingSystem = require("./lib/artemis/systems/RenderingSystem.js");

var world = new World();
world.setSystem(new MovementSystem());
world.setSystem(new RotationSystem());
world.setSystem(new RenderingSystem());

world.initialize();

while(true) {
    world.setDelta(MyGameTimer.getDelay());
	world.process();
}