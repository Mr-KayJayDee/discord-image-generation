const Canvas = require(`canvas`);

module.exports = class ConfusedStonk {
    /**
     * ConfusedStonk
     * @param {image} image1
     */
    async getImage(image1) {
        if (!image1) throw new Error(`You must provide an image as an argument`);
        const canvas = Canvas.createCanvas(1994, 1296);
        const ctx = canvas.getContext(`2d`);
        image1 = await Canvas.loadImage(image1);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/confusedStonk.png`);
        ctx.drawImage(image1, 190, 70, 400, 400);
        ctx.drawImage(background, 0, 0, 1994, 1296);
        return canvas.toBuffer();
    }
};
