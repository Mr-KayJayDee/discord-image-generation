const Canvas = require(`canvas`);

module.exports = class Jail {
    /**
     * Jail
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        let bg = await Canvas.loadImage(`${__dirname}/../../assets/jail.png`);
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext(`2d`);
        ctx.drawImage(img, 0, 0, 400, 400);
        ctx.drawImage(bg, 0, 0, 400, 400);
        return canvas.toBuffer();
    }
};