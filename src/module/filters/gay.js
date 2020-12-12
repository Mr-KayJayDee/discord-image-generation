const Canvas = require(`canvas`);

module.exports = class Gay {
    /**
     * Gay
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        let bg = await Canvas.loadImage(`${__dirname}/../../assets/gay.png`);
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(480, 480);
        const ctx = canvas.getContext(`2d`);
        ctx.drawImage(img, 0, 0, 480, 480);
        ctx.drawImage(bg, 0, 0, 480, 480);
        return canvas.toBuffer();
    }
};