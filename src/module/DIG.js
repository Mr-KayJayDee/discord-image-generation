const Canvas = require("canvas");

const jimp = require("jimp");

const GIFEncoder = require("gifencoder");

const configure = require('@jimp/custom')

const circle = require('@jimp/plugin-circle')

configure({ plugins: [circle] }, jimp);

class DIG {

    /**
     * Beautiful
     * @param {image} image 
     */
    static async beautiful(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let base = await jimp.read(__dirname +"/assets/beautiful.png");
        base.resize(376, 400);
        let img = await jimp.read(image);
        img.resize(84, 95);
        base.composite(img, 258, 28);
        base.composite(img, 258, 229);
        let raw;
        base.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Facepalm
     * @param {image} image 
     */
    static async facepalm(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let canvas = Canvas.createCanvas(632, 357);
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 632, 357);
        let avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 199, 112, 235, 235);
        let layer = await Canvas.loadImage(__dirname +"/assets/facepalm.png");
        ctx.drawImage(layer, 0, 0, 632, 357);
        return canvas.toBuffer();
    }

    /**
     * 
     * @param {image} image 
     */
    static async gay(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let bg = await Canvas.loadImage(__dirname +"/assets/gay.png");
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(480, 480);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 480, 480);
        ctx.drawImage(bg, 0, 0, 480, 480);
        return canvas.toBuffer();
    }

    /**
     * Kiss
     * @param {image1} image1 
     * @param {image2} image2 
     */
    static async kiss(image1, image2) {
        if (!image1) throw new Error("You must provide an image as a first argument.");
        if (!image2) throw new Error("You must provide an image as a second argument.");
        let base = await jimp.read(__dirname+"/assets/kiss.png");
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        base.resize(768, 574);
        image1.resize(200, 200);
        image2.resize(200, 200);
        base.composite(image1, 150, 25);
        base.composite(image2, 350, 25);
        let raw;
        base.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Rip
     * @param {image} image 
     */
    static async rip(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        const canvas = Canvas.createCanvas(244, 253);
        const ctx = canvas.getContext("2d");
        const background = await Canvas.loadImage(__dirname +"/assets/rip.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(image);
        ctx.drawImage(avatar, 63, 110, 90, 90);
        return canvas.toBuffer();
    }

    /**
     * Spank
     * @param {image1} image1 
     * @param {image2} image2 
     */
    static async spank(image1, image2) {
        if (!image1) throw new Error("You must provide an image as a first argument.");
        if (!image2) throw new Error("You must provide an image as a second argument.");
        let bg = await jimp.read(__dirname +"/assets/spank.png");
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        bg.resize(500, 500);
        image1.resize(140, 140);
        image2.resize(120, 120);
        bg.composite(image2, 350, 220);
        bg.composite(image1, 225, 5);
        let raw;
        bg.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Batslap
     * @param {image1} image1 
     * @param {image2} image2 
     */
    static async batslap(image1, image2) {
        if (!image1) throw new Error("You must provide an image as a first argument.");
        if (!image2) throw new Error("You must provide an image as a second argument.");
        let base = await jimp.read(__dirname+"/assets/batslap.png");
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
        base.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Affect
     * @param {image} image 
     */
    static async affect(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let base = await jimp.read(__dirname + "/assets/affect.png");
        let img = await jimp.read(image);
        img.resize(200, 157);
        base.composite(img, 180, 383);
        let raw;
        base.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Blur
     * @param {image} image 
     * @param {number} level 
     */
    static async blur(image, level = 5) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        image = await jimp.read(image);
        image.resize(480, 480)
        image.blur(isNaN(level) ? 5 : parseInt(level));
        let raw;
        image.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Geryscale
     * @param {image} image 
     */
    static async greyscale(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        image = await jimp.read(image);
        image.resize(480, 480)
        image.greyscale();
        let raw;
        image.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Sepia
     * @param {image} image 
     */
    static async sepia(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        image = await jimp.read(image);
        image.resize(480, 480)
        image.sepia();
        let raw;
        image.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Invert
     * @param {image} image 
     */
    static async invert(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        image = await jimp.read(image);
        image.resize(480, 480)
        image.invert();
        let raw;
        image.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Delete
     * @param {image} image 
     */
    static async delete(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let bg = await jimp.read(__dirname + "/assets/delete.png");
        image = await jimp.read(image);
        image.resize(195, 195);
        bg.composite(image, 120, 135);
        let raw;
        bg.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Trash
     * @param {image} image 
     */
    static async trash(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let bg = await jimp.read(__dirname +"/assets/trash.png");
        image = await jimp.read(image);
        image.resize(309, 309);
        image.blur(5);
        bg.composite(image, 309, 0);
        let raw;
        bg.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Color
     * @param {color} color 
     */
    static async color(color = "#FFFFFF") {
        const canvas = Canvas.createCanvas(2048, 2048);
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return canvas.toBuffer();
    }

    /**
     * Hitler
     * @param {image} image 
     */
    static async hitler(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let bg = await jimp.read(__dirname + "/assets/hitler.png");
        let img = await jimp.read(image);
        img.resize(140, 140);
        bg.composite(img, 46, 43);
        let raw;
        bg.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Bed
     * @param {image1} image1 
     * @param {image2} image2 
     */
    static async bed(image1, image2) {
        if (!image1) throw new Error("You must provide an image as a first argument.");
        if (!image2) throw new Error("You must provide an image as a second argument.");
        let bg = await jimp.read(__dirname +"/assets/bed.png");
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
        bg.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Wanted
     * @param {image} image 
     */
    static async wanted(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let base = await jimp.read(__dirname + "/assets/wanted.png");
        let img = await jimp.read(image);
        img.resize(447, 447);
        base.composite(img, 145, 282);
        let raw;
        base.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * Triggered
     * @param {image} image 
     */
    static async triggered(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        const base = await Canvas.loadImage(__dirname +"/assets/triggered.png");
        const img = await Canvas.loadImage(image);
        const GIF = new GIFEncoder(256, 310)
        GIF.start();
        GIF.setRepeat(0);
        GIF.setDelay(15);
        const canvas = Canvas.createCanvas(256, 310);
        const ctx = canvas.getContext('2d');
        const BR = 20;
        const LR = 10;
        for (var i = 0; i < 9; i++) {
            ctx.clearRect(0, 0, 256, 310);
            ctx.drawImage(img, Math.floor(Math.random() * BR) - BR, Math.floor(Math.random() * BR) - BR, 256 + BR, 310 - 54 + BR);
             ctx.fillStyle = '#FF000033';
            ctx.fillRect(0, 0, 256, 310);
            ctx.drawImage(base, Math.floor(Math.random() * LR) - LR, 310 - 54 + Math.floor(Math.random() * LR) - LR, 256 + LR, 54 + LR);
            GIF.addFrame(ctx);
        };
        GIF.finish();
        return GIF.out.getData();
    }

    /**
     * Circle
     * @param {image} image 
     */
    static async circle(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        image = await jimp.read(image);
        image.resize(480, 480);
        image.circle();
        let raw;
        image.getBuffer("image/png", (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }

    /**
     * 
     * @param {image} image 
     */
    static async jail(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let bg = await Canvas.loadImage(__dirname +"/assets/jail.png");
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, 400, 400);
        ctx.drawImage(bg, 0, 0, 400, 400);
        return canvas.toBuffer();
    }

    /**
     * 
     * @param {image} image 
     */
    static async mms(image) {
        if (!image) throw new Error("You must provide an image as a first argument.");
        let bg = await Canvas.loadImage(__dirname +"/assets/mms.png");
        let img = await Canvas.loadImage(image);
        const canvas = Canvas.createCanvas(400, 400);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 70, 20, 250, 250);
        ctx.drawImage(bg, 0, 0, 400, 400);
        return canvas.toBuffer();
    }
}

module.exports = DIG;
