const jimp = require(`jimp`);

module.exports = class Spank {
    /**
     * 
     * @param {image} image1 
     * @param {image} image2 
     */
    async getImage(image1, image2) {
        if (!image1) throw new Error(`You must provide an image as a first argument.`);
        if (!image2) throw new Error(`You must provide an image as a second argument.`);
        let bg = await jimp.read(`${__dirname}/../../assets/spank.png`);
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        image1.greyscale();
        image2.greyscale();
        bg.resize(500, 500);
        image1.resize(140, 140);
        image2.resize(120, 120);
        bg.composite(image2, 350, 220);
        bg.composite(image1, 225, 5);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};