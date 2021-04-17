declare abstract class ImageGenerator {
    abstract getImage(...args: any[]): Promise<Buffer>;
}

declare class DefaultImageGenerator extends ImageGenerator {
    getImage(avatar: string): Promise<Buffer>;
}

export class Blur extends ImageGenerator {
    getImage(avatar: string, level?: number): Promise<Buffer>;
}

export class Blink extends ImageGenerator {
    getImage(avatar: string, avatar2: string, ...avatars: string[]): Promise<Buffer>;
}

export class Batslap extends ImageGenerator {
    getImage(avatar: string, avatar2: string): Promise<Buffer>;
}

export class Bed extends ImageGenerator {
    getImage(avatar: string, avatar2: string): Promise<Buffer>;
}

export class DoubleStonk extends ImageGenerator {
    getImage(avatar: string, avatar2: string): Promise<Buffer>;
}

export class Kiss extends ImageGenerator {
    getImage(avatar: string, avatar2: string): Promise<Buffer>;
}

export class LisaPresentation extends ImageGenerator {
    getImage(text: string): Promise<Buffer>;
}

export class Podium extends ImageGenerator {
    getImage(
        avatar: string, 
        avatar2: string, 
        avatar3: string, 
        name: string, 
        name2: string, 
        name3: string
    ): Promise<Buffer>;
}

export class Spank extends ImageGenerator {
    getImage(avatar: string, avatar2: string): Promise<Buffer>;
}

export class Wanted extends ImageGenerator {
    getImage(avatar: string, currency: string): Promise<Buffer>;
}

export class Color extends ImageGenerator {
    getImage(color: string): Promise<Buffer>;
}

export class Gay extends DefaultImageGenerator {}
export class Greyscale extends DefaultImageGenerator {}
export class Invert extends DefaultImageGenerator {}
export class Sepia extends DefaultImageGenerator {}
export class Triggered extends DefaultImageGenerator {}
export class Ad extends DefaultImageGenerator {}
export class Affect extends DefaultImageGenerator {}
export class Beautiful extends DefaultImageGenerator {}
export class Bobross extends DefaultImageGenerator {}
export class ConfusedStonk extends DefaultImageGenerator {}
export class Delete extends DefaultImageGenerator {}
export class DiscordBlack extends DefaultImageGenerator {}
export class DiscordBlue extends DefaultImageGenerator {}
export class Facepalm extends DefaultImageGenerator {}
export class Hitler extends DefaultImageGenerator {}
export class Jail extends DefaultImageGenerator {}
export class Karaba extends DefaultImageGenerator {}
export class Mms extends DefaultImageGenerator {}
export class NotStonk extends DefaultImageGenerator {}
export class Poutine extends DefaultImageGenerator {}
export class Rip extends DefaultImageGenerator {}
export class Stonk extends DefaultImageGenerator {}
export class Tatoo extends DefaultImageGenerator {}
export class Thomas extends DefaultImageGenerator {}
export class Trash extends DefaultImageGenerator {}
export class Circle extends DefaultImageGenerator {}
