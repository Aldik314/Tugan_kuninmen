import { resources } from "./resource.js";

const canvas = document.querySelector("#page");
const ctx = canvas.getContext("2d");

canvas.width = 814;
canvas.height = 600;

let cloudOffset = 0;
const CLOUD_SPEED = 0.01;

const img_size = 0.6;
const frames = [];
const frameCount = 15;

// Store actual Image objects, not just paths
const loadedFrames = [];
let framesLoaded = 0;
let currentFrame = 0;

// Preload all images
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `./assets/img/m_sitting/${i}.png`;
    img.onload = () => {
        framesLoaded++;
        console.log(`Loaded ${framesLoaded}/${frameCount} frames`);
    };
    loadedFrames.push(img);
}

setInterval(() => {
    currentFrame = (currentFrame + 1) % frameCount;
}, 240);

const draw = () => {
    const game_border = resources.images.game_border;
    if (game_border.isLoaded) {
        ctx.drawImage(game_border.image, 0, 0)
    }

    const background_clouds = resources.images.background_clouds;
    if (background_clouds.isLoaded) {
        const img = background_clouds.image;
        const imgWidth = img.width;

        ctx.save();
        ctx.beginPath();
        ctx.rect(6, 42, 800, 550);
        ctx.clip();

        ctx.drawImage(img, 6 - cloudOffset, 42);
        ctx.drawImage(img, 6 - cloudOffset + imgWidth, 42);

        cloudOffset = (cloudOffset + CLOUD_SPEED) % imgWidth;

        ctx.restore();
    }

    const background_ground = resources.images.background_ground;
    if (background_ground.isLoaded) {
        ctx.drawImage(background_ground.image, 6, 42)
    }

    if (loadedFrames[currentFrame] && loadedFrames[currentFrame].complete) {
        ctx.drawImage(loadedFrames[currentFrame], 90, 450, 
            loadedFrames[currentFrame].width * img_size, 
            loadedFrames[currentFrame].height * img_size);
    }
}

const loop = () => {
    draw();
    requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
