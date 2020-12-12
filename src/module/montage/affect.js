const jimp = require(`jimp`);

module.exports = class Affect {
    /**
     * Affect
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        let base = await jimp.read(`${__dirname}/../../assets/affect.png`);
        let img = await jimp.read(image);
        img.resize(200, 157);
        base.composite(img, 180, 383);
        let raw;
        base.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};