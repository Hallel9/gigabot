const commando = require('discord.js-commando');
const path = require('path');
const config = require(`./config.json`)
const client = new commando.CommandoClient({
    owner: '241632903258177536',
    commandPrefix: '_'
});
client.login(config.TOKEN);
client.registry.registerGroups([
    ['moderation', 'mod commands'],
    ['misc', 'misc commands'],
    ['roles', 'roles commands'],
    ['music', 'music bot commands'],
    ['math', 'Math Commands'] 
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log("Bot has logged in.");
});