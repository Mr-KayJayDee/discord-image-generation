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

![Blur](https://cdn.discordapp.com/attachments/692101136802643989/714952645063999548/blur.png)

- .facepalm(`<Avatar>`);

![Facepalm](https://cdn.discordapp.com/attachments/692101136802643989/714952886123233331/facepalm.png)

- .gay(`<Avatar>`);

![Gay](https://cdn.discordapp.com/attachments/692101136802643989/714953399308910664/gay.png)

- .rip(`<Avatar>`);

![RIP](https://cdn.discordapp.com/attachments/692101136802643989/714954650121404517/rip.png)

- .trash(`<Avatar>`);

![Trash](https://cdn.discordapp.com/attachments/692101136802643989/714955652216127498/trash.png)

- .circle(`<Avatar>`);

![Circle](https://cdn.discordapp.com/attachments/692101136802643989/714956290270691358/circle.png)

- .greyscale(`<Avatar>`);

![Greyscale](https://cdn.discordapp.com/attachments/692101136802643989/714956749521551411/greyscale.png)

- .kiss(`<Avatar>`, `<Avatar2>`);

![Kiss](https://cdn.discordapp.com/attachments/692101136802643989/714960724668973106/kiss.png)

- .sepia(`<Avatar>`);

![Sepia](https://cdn.discordapp.com/attachments/692101136802643989/714961378917744700/sepia.png)

- .mms(`<Avatar>`);

![MMS](https://cdn.discordapp.com/attachments/692101136802643989/714961764692787230/mms.png)

- .spank(`<Avatar>`, `<Avatar2>`);

![Spank](https://cdn.discordapp.com/attachments/692101136802643989/714962287361785906/spank.png)

- .color(`<Color>`);

> An hex color is needed, like "#FF0000"

![Color](https://cdn.discordapp.com/attachments/692101136802643989/714964205127598120/color.png)

- .triggered(`<Avatar>`);

![Triggered](https://cdn.discordapp.com/attachments/692101136802643989/714968315214299166/triggered.gif)

- .hitler(`<Avatar>`);

![Hitler](https://cdn.discordapp.com/attachments/692101136802643989/714969429598797935/hitler.png)

- .batslap(`<Avatar>`, `<Avatar2>`);

![Batslap](https://cdn.discordapp.com/attachments/692101136802643989/714969652521861160/batslap.png)

- .bed(`<Avatar>`, `<Avatar2>`);

![Bed](https://cdn.discordapp.com/attachments/692101136802643989/714970182946258974/bed.png)

- .invert(`<Avatar>`);

![Invert](https://cdn.discordapp.com/attachments/692101136802643989/714970523469217832/invert.png)

- .wanted(`<Avatar>`, `<Currency>`);

> Currency ($, €, ...)

![Wanted](https://cdn.discordapp.com/attachments/720225919523881041/720538669412253757/wanted.png)

- .beautiful(`<Avatar>`);

![Beautiful](https://cdn.discordapp.com/attachments/692101136802643989/714971024000811092/beautiful.png)

- .jail(`<Avatar>`);

![Jail](https://cdn.discordapp.com/attachments/692101136802643989/714971265953300571/jail.png)

- .affect(`<Avatar>`);

![Affect](https://cdn.discordapp.com/attachments/692101136802643989/714971482207289394/affect.png)

- .delete(`<Avatar>`);

![Delete](https://cdn.discordapp.com/attachments/692101136802643989/714971728849141901/delete.png)

- .thomas(`<Avatar>`);

![Thomas](https://cdn.discordapp.com/attachments/720225919523881041/720543470850146345/thomas.png)