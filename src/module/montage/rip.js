const Canvas = require("canvas");
const jimp = require("jimp");

module.exports = class Rip {
    /**
     * Rip
     * @param {image} image 
     */

    async getImage(image) {
        if (!image) throw new Error(`You must provide an image.`);
        const canvas = Canvas.createCanvas(244, 253);
        const ctx = canvas.getContext(`2d`);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/rip.png`);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 63, 110, 90, 90);
        return canvas.toBuffer();
    }
}