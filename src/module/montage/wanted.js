const Canvas = require(`canvas`);
const {
    applyText
} = require(`../functions`);

module.exports = class Wanted {
    /**
     * Wanted
     * @param {image} image 
     */
    async getImage(image, currency = `$`) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        if (typeof currency != `string`) throw new Error(`You must provide a string for the currency.`);
        if (currency.length > 1) throw new Error(`You must provide only one character for the currency.`);
        var price = Math.floor(Math.random() * 188708) + 329889;
        const canvas = Canvas.createCanvas(257, 383);
        const ctx = canvas.getContext(`2d`);
        const avatar = await Canvas.loadImage(image);
        const background = await Canvas.loadImage(`${__dirname}/../../assets/wanted.png`);
        ctx.drawImage(avatar, 25, 60, 210, 210);
        ctx.drawImage(background, 0, 0, 257, 383);
        ctx.textAlign = `center`;
        ctx.font = applyText(canvas, price.toLocaleString() + currency, 80, 200, `Times New Roman`);
        ctx.fillStyle = `#513d34`;
        ctx.fillText(price.toLocaleString() + currency, 128, 315);
        return canvas.toBuffer();
    }
};