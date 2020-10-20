const jimp = require(`jimp`);

module.exports = class Bed {
    /**
     * Bed
     * @param {image} image1 
     * @param {image} image2 
     */
    async getImage(image1, image2) {
        if (!image1) throw new Error(`You must provide an image as a first argument.`);
        if (!image2) throw new Error(`You must provide an image as a second argument.`);
        let bg = await jimp.read(`${__dirname}/../../assets/bed.png`);
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        image1.resize(100, 100);
        image2.resize(70, 70);
        let image3 = image1.clone().resize(70, 70);
        bg.composite(image1, 25, 100);
        bg.composite(image1, 25, 300);
        bg.composite(image3, 53, 450);
        bg.composite(image2, 53, 575);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};