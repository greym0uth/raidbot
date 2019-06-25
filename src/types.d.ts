import { TextChannel, User, DMChannel, GroupDMChannel, Guild } from "discord.js";

declare interface ClientContext {
    author: User;
    channel: TextChannel | DMChannel | GroupDMChannel;
    guild: Guild;
}

declare interface Command {
    exec(args: Arguments, context: ClientContext): Promise<string> | string;
    description: string;
}

declare interface Commands {
    [key: string]: Command;
}

declare interface ClientOptions {
    prefix: string;
}

declare interface ServerOptions {
    databaseUrl: string;
}

declare type Arguments = string[];