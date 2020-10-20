const jimp = require(`jimp`);

module.exports = class Batslap {
    /**
     * Batslap
     * @param {image} image1 
     * @param {image} image2 
     */
    async getImage(image1, image2) {
        if (!image1) throw new Error(`You must provide an image as a first argument.`);
        if (!image2) throw new Error(`You must provide an image as a second argument.`);
        let base = await jimp.read(`${__dirname}/../../assets/batslap.png`);
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        base.resize(1000, 500);
        image1.resize(220, 220);
        image2.resize(200, 200);
        base.composite(image2, 580, 260);
        base.composite(image1, 350, 70);
        let raw;
        base.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};