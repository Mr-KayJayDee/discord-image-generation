const { createCanvas, loadImage, registerFont } = require('canvas');
registerFont(`${__dirname}/../../assets/fonts/Noto-Regular.ttf`, { family: 'Noto' });
registerFont(`${__dirname}/../../assets/fonts/Noto-CJK.otf`, { family: 'Noto' });
registerFont(`${__dirname}/../../assets/fonts/Noto-Emoji.ttf`, { family: 'Noto' });

function wrapText(ctx, text, maxWidth) {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
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
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
}

module.exports = class LisaPresentation {

  async getImage(text) {
          if (!text || text.length > 300) throw new Error(`You must provide a text of 300 characters or less.`)
          
          const base = await loadImage(path.join(`${__dirname}/../../assets/lisa-presentation.png`));
          const canvas = createCanvas(base.width, base.height);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(base, 0, 0);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.font = '40px Noto';
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

}
