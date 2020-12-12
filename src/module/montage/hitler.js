const jimp = require(`jimp`);

module.exports = class Hitler {
    /**
     * Hitler
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        let bg = await jimp.read(`${__dirname}/../../assets/hitler.png`);
        let img = await jimp.read(image);
        img.resize(140, 140);
        bg.composite(img, 46, 43);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};