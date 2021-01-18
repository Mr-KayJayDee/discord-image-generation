const Canvas = require(`canvas`);
const GIFEncoder = require(`gifencoder`);

module.exports = class Blink {

    async getImage( ...images) {
        if (!images || images.length < 2) throw new Error(`You must provide at least two images.`);
        
        const GIF = new GIFEncoder(480, 480);
        GIF.start();
        GIF.setRepeat(0);
        GIF.setDelay(1000);
        GIF.setTransparent();
        
        const canvas = Canvas.createCanvas(480, 480);

        for (const image of images) {
            const base = await Canvas.loadImage(image);
            const ctx2 = canvas.getContext(`2d`);
            ctx2.clearRect(0, 0, 480, 480);
            ctx2.drawImage(base, 0, 0, 480, 480);
            GIF.addFrame(ctx2);
        }
        
        GIF.finish();
        return GIF.out.getData();
    }
};
