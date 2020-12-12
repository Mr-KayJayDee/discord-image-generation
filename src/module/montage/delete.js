const jimp = require(`jimp`);

module.exports = class Delete {
    /**
     * Delete
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        let bg = await jimp.read(`${__dirname}/../../assets/delete.png`);
        image = await jimp.read(image);
        image.resize(195, 195);
        bg.composite(image, 120, 135);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};