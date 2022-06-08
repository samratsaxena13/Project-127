var oceanBlue = "";
var lightSwitch = "";

function preload() {
    oceanBlue = loadSound("ocean-blue.mp3");
    lightSwitch = loadSound("light-switch.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(480, 160);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400);
}