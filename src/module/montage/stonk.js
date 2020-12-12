const Canvas = require(`canvas`);

module.exports = class Stonk {
    /**
     * Stonk
     * @param {image} image1
     */
    async getImage(image1) {
        if (!image1) throw new Error(`You must provide an image as an argument`);
        const canvas = Canvas.createCanvas(900, 539);
        const ctx = canvas.getContext(`2d`);
        image1 = await Canvas.loadImage(image1);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/stonk.png`);
        ctx.drawImage(image1, 70, 40, 240, 240);
        ctx.drawImage(background, 0, 0, 900, 539);
        return canvas.toBuffer();
    }
};
