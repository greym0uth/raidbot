import { prisma } from '../../prisma/client';
import { Arguments } from '../types';

export default {
    create: {
        exec(args: Arguments, context): string {
        //TODO HOOK 
        return 'implement'
        },
        description: 'This creates a character',
    },
    help: {
        exec(args: Arguments, context): string {
            let response = '';
            Object.keys(this).forEach((key) => {
                response = `${response}${this[key]}: ${this[key].description}\n`;
            })
        },
        description: 'its the help the dog, c\'mon'
    }

}
