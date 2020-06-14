const Canvas = require(`canvas`);

const GIFEncoder = require(`gifencoder`);

module.exports = class Blink {
    /**
     * Blink
     * @param {image} image1 
     * @param {image} image2 
     * @param {number} timeout 
     * @param {number} height For later
     * @param {number} width For later
     */
    async getImage(image1, image2, timeout = 1000, height, width) {
        if (!image1) throw new Error(`You must provide an image as a first argument.`);
        if (!image2) throw new Error(`You must provide an image as a second argument.`);
        if (isNaN(timeout)) throw new Error(`The timeout argument must be a number.`)
        const img = await Canvas.loadImage(image1);
        const base = await Canvas.loadImage(image2);
        const GIF = new GIFEncoder(480, 480)
        GIF.start();
        GIF.setRepeat(0);
        GIF.setDelay(timeout);
        GIF.setTransparent();
        const canvas = Canvas.createCanvas(480, 480);
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 480, 480);
        ctx.drawImage(img, 0, 0, 480, 480);
        GIF.addFrame(ctx);
        const ctx2 = canvas.getContext('2d');
        ctx2.clearRect(0, 0, 480, 480);
        ctx2.drawImage(base, 0, 0, 480, 480);
        GIF.addFrame(ctx2)
        GIF.finish();
        console.log(GIF.out.getData())
        return GIF.out.getData();
    }
}