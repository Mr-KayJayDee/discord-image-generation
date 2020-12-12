const Canvas = require(`canvas`);

module.exports = class Thomas {
    /**
     * Thomas
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        const canvas = Canvas.createCanvas(841, 1058);
        const ctx = canvas.getContext(`2d`);
        const avatar = await Canvas.loadImage(image);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/thomas.png`);
        ctx.drawImage(avatar, 220, 190, 400, 400);
        ctx.drawImage(background, 0, 0, 841, 1058);
        return canvas.toBuffer();
    }
};