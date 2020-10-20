const jimp = require(`jimp`);

module.exports = class DoubleStonk {
    /**
     * DoubleStonk
     * @param {image} image1 
     * @param {image} image2 
     */
    async getImage(image1, image2) {
        if (!image1) throw new Error(`You must provide an image as a first argument.`);
        if (!image2) throw new Error(`You must provide an image as a second argument.`);
        let base = await jimp.read(`${__dirname}/../../assets/doubleStonk.png`);
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        base.resize(577, 431);
        image1.resize(140, 140);
        image2.resize(140, 140);
        base.composite(image2, 60, 20);
        base.composite(image1, 0, 30);
        let raw;
        base.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};