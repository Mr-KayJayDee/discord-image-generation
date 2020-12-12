const Canvas = require(`canvas`);

module.exports = class Ad {
    /**
     * Ad
     * @param {image} image1
     */
    async getImage(image1) {
        if (!image1) throw new Error(`You must provide an image as an argument`);
        const canvas = Canvas.createCanvas(550, 474);
        const ctx = canvas.getContext(`2d`);
        image1 = await Canvas.loadImage(image1);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/ad.png`);
        ctx.drawImage(image1, 150, 75, 230, 230);
        ctx.drawImage(background, 0, 0, 550, 474);
        return canvas.toBuffer();
    }
};
