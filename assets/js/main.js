import { resources } from "./resource.js";

const canvas = document.querySelector("#page");
const ctx = canvas.getContext("2d");

canvas.width = 814;
canvas.height = 600;

const draw = () => {
    const game_border = resources.images.game_border;
    if (game_border.isLoaded) {
        ctx.drawImage(game_border.image, 0, 0)
    }

    const background_clouds = resources.images.background_clouds;
    if (background_clouds.isLoaded) {
        ctx.drawImage(background_clouds.image, 6, 42)
    }

    const background_ground = resources.images.background_ground;
    if (background_ground.isLoaded) {
        ctx.drawImage(background_ground.image, 6, 42)
    }
}

setInterval(() => {
    draw()
}, 300)