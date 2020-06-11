<a href="https://nodei.co/npm/discord-image-generation/"><img src="https://nodei.co/npm/discord-image-generation.png?downloads=true&downloadRank=true&stars=true"></a>

<a href="https://discord.gg/qvzwqaM"><img src="https://discord.com/api/guilds/661897530459684865/widget.png" alt="Discord server"/></a>

# discord-image-generation

A powerfull module that allow you to generate awesome images.

# Bugs and glitches

Feel free to report all bugs and glitches by creating an issue in the <a href="https://github.com/Mr-KayJayDee/discord-image-generation/issues">issue section.</a>

A correct and understandable issue contains : 
- Steps to reproduce 
- Code that summonned the error
- The complete error

You can also join me on my <a href="https://discord.gg/qvzwqaM">discord server.</a>

# Changelog 

## v0.1.9
- Added options for the wanted.
    - The base image has been updated
    - There is now a random price diplayed
    - You can now configure a currency
- Added .thomas()

## v0.1.11
- Added .tatoo()
- Updated JSDoc


# Download

You can download it from <a href="https://www.npmjs.com/package/discord-image-generation">npmjs</a>.

```cli
npm i discord-image-generation
```

# Configuration

The first step is to import the module in your code.

```js
const DIG = require("discord-image-generation");
```

Then you have to request your image and send it as an attachement.

```js
// Import the discord.js library.
const Discord = require("discord.js")
// Create a new discord.js client.
const bot = new Discord.Client()

const DIG = require("discord-image-generation");

// Listen to the ready event
bot.on("ready", () => {
    console.log("ok");  
})

// Listen to the message event
bot.on("message", async (message) => {
    if (message.content === "*delete") {
    	// Get the avatarUrl of the user
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await DIG.delete(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)
    }
})

// Log in to the bot
bot.login("super_secret_token")
````

# Available images

- .blur(`<Avatar>`, `<Level(Number)>`);

![Blur](https://imgur.com/JqpNFTY.png)

- .facepalm(`<Avatar>`);

![Facepalm](https://imgur.com/cdPC3P1.png)

- .gay(`<Avatar>`);

![Gay](https://imgur.com/BDTrXzZ.png)

- .rip(`<Avatar>`);

![RIP](https://imgur.com/MgsRH8o.png)

- .trash(`<Avatar>`);

![Trash](https://imgur.com/nwAHGgF.png)

- .circle(`<Avatar>`);

![Circle](https://imgur.com/0Zo8NYS.png)

- .greyscale(`<Avatar>`);

![Greyscale](https://imgur.com/h3ahY7Z.png)

- .kiss(`<Avatar>`, `<Avatar2>`);

![Kiss](https://imgur.com/sSoCAeH.png)

- .sepia(`<Avatar>`);

![Sepia](https://imgur.com/OTbKVtj.png)

- .mms(`<Avatar>`);

![MMS](https://imgur.com/nH3URHb.png)

- .spank(`<Avatar>`, `<Avatar2>`);

![Spank](https://imgur.com/VRvogo7.png)

- .color(`<Color>`);

> An hex color is needed, like "#FF0000"

![Color](https://imgur.com/40tMwfe.png)

- .triggered(`<Avatar>`);

![Triggered](https://imgur.com/0QvyYQa.png)

- .hitler(`<Avatar>`);

![Hitler](https://imgur.com/wK9puxH.png)

- .batslap(`<Avatar>`, `<Avatar2>`);

![Batslap](https://imgur.com/oYMpa5A.png)

- .bed(`<Avatar>`, `<Avatar2>`);

![Bed](https://imgur.com/b1idSnr.png)

- .invert(`<Avatar>`);

![Invert](https://imgur.com/Rl0wGQM.png)

- .wanted(`<Avatar>`, `<Currency>`);

> Currency ($, €, ...)

![Wanted](https://imgur.com/SFGRvSK.png)

- .beautiful(`<Avatar>`);

![Beautiful](https://imgur.com/HGZkmXo.png)

- .jail(`<Avatar>`);

![Jail](https://imgur.com/QslACNo.png)

- .affect(`<Avatar>`);

![Affect](https://imgur.com/g4Gaehb.png)

- .delete(`<Avatar>`);

![Delete](https://imgur.com/6V1IYJp.png)

- .thomas(`<Avatar>`);

![Thomas](https://imgur.com/5Iv6t9v.png)