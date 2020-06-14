module.exports = {
    /**
     * Crate a responsive on the text
     * Code from https://discordjs.guide/popular-topics/canvas.html#adding-in-text
     * @param {object} canvas the canvas object
     * @param {string} text the text
     * @param {number} defaultFontSize the default font size
     * @param {number} width the default width
     * @param {string} font the font
     */
    applyText(canvas, text, defaultFontSize, width, font) {
        const ctx = canvas.getContext("2d");
        do {
            ctx.font = `${(defaultFontSize -= 1)-3}px ${font}`;
        } while (ctx.measureText(text).width > width);
        return ctx.font;
    }
}