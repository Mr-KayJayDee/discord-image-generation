const Canvas = require(`canvas`);

module.exports = class Mms {
    /**
     * MMS
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        let bg = await Canvas.loadImage(`${__dirname}/../../assets/mms.png`);
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext(`2d`);
        ctx.drawImage(img, 60, 10, 270, 270);
        ctx.drawImage(bg, 0, 0, 400, 400);
        return canvas.toBuffer();
    }
};