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
        const ctx = canvas.getContext(`2d`);
        do {
            ctx.font = `${(defaultFontSize -= 1)}px ${font}`;
        } while (ctx.measureText(text).width > width);
        return ctx.font;
    },

    wrapText(ctx, text, maxWidth) {
        return new Promise(resolve => {
            if (ctx.measureText(text).width < maxWidth) return resolve([text]);
            if (ctx.measureText(`W`).width > maxWidth) return resolve(null);
            const words = text.split(` `);
            const lines = [];
            let line = ``;
            while (words.length > 0) {
                let split = false;
                while (ctx.measureText(words[0]).width >= maxWidth) {
                    const temp = words[0];
                    words[0] = temp.slice(0, -1);
                    if (split) {
                        words[1] = `${temp.slice(-1)}${words[1]}`;
                    }
                    else {
                        split = true;
                        words.splice(1, 0, temp.slice(-1));
                    }
                }
                if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) {
                    line += `${words.shift()} `;
                }
                else {
                    lines.push(line.trim());
                    line = ``;
                }
                if (words.length === 0) lines.push(line.trim());
            }
            return resolve(lines);
        });
    }
};