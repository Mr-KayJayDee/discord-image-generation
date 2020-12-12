const Canvas = require(`canvas`);

module.exports = class Poutine {
    /**
     * Ad
     * @param {image} image1
     */
    async getImage(image1) {
        if (!image1) throw new Error(`You must provide an image as an argument`);
        const canvas = Canvas.createCanvas(600, 539);
        const ctx = canvas.getContext(`2d`);
        image1 = await Canvas.loadImage(image1);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/poutine.png`);
        ctx.drawImage(image1, 350, 20, 135, 135);
        ctx.drawImage(background, 0, 0, 600, 539);
        return canvas.toBuffer();
    }
};
