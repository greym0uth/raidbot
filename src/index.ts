import { Client } from 'discord.js';
import commands from './commands';
import { ClientContext } from './types';

require('dotenv').config();

const client = new Client();

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    console.log('Raidbot is running; waiting for challengers!');
});

client.on('message', async (message) => {
    const { author, channel, content, guild } = message;

    if (author.id === client.user.id) return;

    const context: ClientContext = {
        author,
        channel,
        guild,
    };
    const commandMatch = /^r\!/.exec(content);
    if (commandMatch) {
        const rawCommand = content.substring(commandMatch.index + commandMatch[0].length, content.length);
        const [cmd, ...args] = rawCommand.split(/\s/);

        if (commands[cmd]) {
            message.channel.send(await commands[cmd].exec(args, context));
        } else {
            message.channel.send('Not a valid command please use r!help for a list of commands.');
        }
    }
});