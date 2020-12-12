const Canvas = require(`canvas`);

module.exports = class Rip {
    /**
     * Rip
     * @param {image} image 
     */

    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        const canvas = Canvas.createCanvas(720, 405);
        const ctx = canvas.getContext(`2d`);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/rip.png`);
        const avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 110, 47, 85, 85);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        return canvas.toBuffer();
    }
};