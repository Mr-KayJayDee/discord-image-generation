const { readdirSync } = require(`fs`);
const { join } = require(`path`);

for (let type of readdirSync(join(__dirname, `module`)).filter(
    f => !f.includes(`.`)
)) {
    readdirSync(join(__dirname, `module`, type))
        .filter(file => file !== `index.js` && file.endsWith(`.js`))
        .map(File => {
            const Name = File.split(`.`)[0];
            exports[
                Name.charAt(0).toUpperCase() + Name.slice(1)
            ] = require(`${__dirname}/module/${type}/${File}`);
        });
}
