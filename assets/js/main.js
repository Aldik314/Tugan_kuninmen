import { resources } from "./resource.js";

const canvas = document.querySelector("#page");
const ctx = canvas.getContext("2d");

canvas.width = 814;
canvas.height = 600;

let cloudOffset = 0;
const CLOUD_SPEED = 0.05;

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
}

const loop = () => {
    draw();
    requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
