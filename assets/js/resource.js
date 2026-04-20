class Resources {
    constructor() {
        // To download everything we need
        this.toLoad = {
            game_border: "./assets/img/bg/game_b.png",
            background_clouds: "./assets/img/bg/bg_m.png",
            background_ground: "./assets/img/bg/bg.png"
        };

        // To keep the images
        this.images = {};

        // To load each image
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image : img,
                isLoaded : false
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        })
    }
}

export const resources = new Resources();