import { prisma } from "../../prisma/client";
import { Arguments, ClientContext, Command } from "../types";

export default {
    async exec(args: Arguments, context: ClientContext): Promise<string> {
        try {
            if (await prisma.$exists.user({
                handle: context.author.id,
                guild: context.guild.id,
            })) {
                return 'You already have a character.';
            }

            const users = await prisma.users({ where: {
                handle: context.author.id,
                guild: context.guild.id,
            }});

            if (users.length > 0) {
                return `Current experience: ${users[0].exp}`;
            }

            return 'No character available.';
        } catch (err) {
            return 'An error occurred.';
        }
    },
    description: 'Info about your character.',
} as Command
