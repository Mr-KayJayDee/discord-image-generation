const Canvas = require("canvas");

module.exports = class Tatoo {
    /**
     * Tatoo
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image.`);
        const canvas = Canvas.createCanvas(750, 1089);
        const ctx = canvas.getContext(`2d`);
        const avatar = await Canvas.loadImage(image);
        const background = await Canvas.loadImage(`../src/assets/tatoo.png`);
        ctx.drawImage(avatar, 145, 575, 400, 400);
        ctx.drawImage(background, 0, 0, 750, 1089);
        return canvas.toBuffer();
    }
}