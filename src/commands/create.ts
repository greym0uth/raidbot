import { prisma } from "../../prisma/client";
import { Arguments, ClientContext, Command } from "../types";

export default {
    async exec(args: Arguments, context: ClientContext): Promise<string> {
        try {
            if (await prisma.$exists.user({ handle: context.author.id,
                                            guild: context.guild.id })) {
                return 'You already have a character.';
            }

            const newUser = await prisma.createUser({
                name: context.author.username,
                guild: context.guild.id,
                handle: context.author.id,
            });

            if (newUser) {
                return 'Your character is ready for an adventure.';
            }

            return 'Unable to create your character.';
        } catch (err) {
            return 'An error occurred.';
        }
    },
    description: 'This creates a character',
} as Command