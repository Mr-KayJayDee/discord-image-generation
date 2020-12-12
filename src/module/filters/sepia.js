const jimp = require(`jimp`);

module.exports = class Sepia {
    /**
     * Sepia
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        image = await jimp.read(image);
        image.sepia();
        let raw;
        image.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};