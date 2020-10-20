const { createCanvas, loadImage, registerFont } = require(`canvas`);
registerFont(`${__dirname}/../../assets/fonts/Noto-Regular.ttf`, { family: `Noto` });
registerFont(`${__dirname}/../../assets/fonts/Noto-Emoji.ttf`, { family: `Noto` });
const path = require(`path`);
const { wrapText } = require(`../functions`);

module.exports = class LisaPresentation {

    async getImage(text) {
        if (!text || text.length > 300) throw new Error(`You must provide a text of 300 characters or less.`);

        const base = await loadImage(path.join(`${__dirname}/../../assets/lisa-presentation.png`));
        const canvas = createCanvas(base.width, base.height);
        const ctx = canvas.getContext(`2d`);
        ctx.drawImage(base, 0, 0);
        ctx.textAlign = `center`;
        ctx.textBaseline = `top`;
        ctx.font = `40px Noto`;
        let fontSize = 40;
        while (ctx.measureText(text).width > 1320) {
            fontSize -= 1;
            ctx.font = `${fontSize}px Noto`;
        }
        const lines = await wrapText(ctx, text, 330);
        const topMost = 185 - (((fontSize * lines.length) / 2) + ((20 * (lines.length - 1)) / 2));
        for (let i = 0; i < lines.length; i++) {
            const height = topMost + ((fontSize + 20) * i);
            ctx.fillText(lines[i], base.width / 2, height);
        }

        return canvas.toBuffer();
    }

};