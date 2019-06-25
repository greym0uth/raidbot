import { Client } from 'discord.js';
import commands from './commands';
import { ClientContext } from './types';

const client = new Client();

client.login(process.env.DISCORD_TOKEN);

client.on('message', async (message) => {
    const { author, channel, content, guild } = message;
    const context: ClientContext = {
        author,
        channel,
        guild,
    };
    const commandMatch = /r!.*/.exec(content);
    if (commandMatch) {
        const rawCommand = content.substring(commandMatch.index, content.length);
        const [cmd, ...args] = rawCommand.split(/\s/);

        if (commands[cmd]) {
            message.reply(await commands[cmd](args, context));
        } else {
            message.reply('Not a valid command please use r!help for a list of commands.');
        }
    }
});