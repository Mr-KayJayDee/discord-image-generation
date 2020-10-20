const Canvas = require(`canvas`);

module.exports = class Color {
    /**
     * Color
     * @param {string} color 
     */
    async getImage(color = `#FFFFFF`) {
        const canvas = Canvas.createCanvas(2048, 2048);
        const ctx = canvas.getContext(`2d`);
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return canvas.toBuffer();
    }
};