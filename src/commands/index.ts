import { prisma } from '../../prisma/client';
import { Arguments, ClientContext, Commands, Command } from '../types';

import create from './create';
import info from './info';

const commands: Commands = {
    create,
    info,
    help: {
        exec(args: Arguments, context: ClientContext): string {
            let response = '```md\n###-----Raidbot Help-----\n';
            Object.keys(commands).forEach((key) => {
                response = `${response}${key}: ${commands[key].description}\n`;
            });
            return response + '```';
        },
        description: 'its the help the dog, c\'mon',
    } as Command,
};

export default commands;
