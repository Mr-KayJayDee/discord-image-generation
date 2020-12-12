const Canvas = require(`canvas`);

module.exports = class Mms {
    /**
     * MMS
     * @param {image} image
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as an argument`);
        let bg = await Canvas.loadImage(`${__dirname}/../../assets/karaba.png`);
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(bg.width, bg.height);
        const ctx = canvas.getContext(`2d`);
        ctx.drawImage(img, 130, 44, 130, 130);
        ctx.drawImage(bg, 0, 0, bg.width, bg.height);
        return canvas.toBuffer();
    }
};
