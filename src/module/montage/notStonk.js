const Canvas = require(`canvas`);

module.exports = class NotStonk {
    /**
     * NotStonk
     * @param {image} image1
     */
    async getImage(image1) {
        if (!image1) throw new Error(`You must provide an image as an argument`);
        const canvas = Canvas.createCanvas(960, 576);
        const ctx = canvas.getContext(`2d`);
        image1 = await Canvas.loadImage(image1);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/notStonk.png`);
        ctx.drawImage(image1, 140, 5, 190, 190);
        ctx.drawImage(background, 0, 0, 960, 576);
        return canvas.toBuffer();
    }
};
