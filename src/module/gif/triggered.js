const Canvas = require(`canvas`);

const GIFEncoder = require(`gifencoder`);

module.exports = class Triggered {
    /**
     * Triggered
     * @param {image} image 
     * @param {number} timeout 
     */
    async getImage(image, timeout = 15) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        if (isNaN(timeout)) throw new Error(`The timeout argument must be a number.`);
        const base = await Canvas.loadImage(`${__dirname}/../../assets/triggered.png`);
        const img = await Canvas.loadImage(image);
        const GIF = new GIFEncoder(256, 310);
        GIF.start();
        GIF.setRepeat(0);
        GIF.setDelay(timeout);
        const canvas = Canvas.createCanvas(256, 310);
        const ctx = canvas.getContext(`2d`);
        const BR = 20;
        const LR = 10;
        for (var i = 0; i < 9; i++) {
            ctx.clearRect(0, 0, 256, 310);
            ctx.drawImage(img, Math.floor(Math.random() * BR) - BR, Math.floor(Math.random() * BR) - BR, 256 + BR, 310 - 54 + BR);
            ctx.fillStyle = `#FF000033`;
            ctx.fillRect(0, 0, 256, 310);
            ctx.drawImage(base, Math.floor(Math.random() * LR) - LR, 310 - 54 + Math.floor(Math.random() * LR) - LR, 256 + LR, 54 + LR);
            GIF.addFrame(ctx);
        }
        GIF.finish();
        return GIF.out.getData();
    }
};