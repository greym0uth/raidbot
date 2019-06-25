import { TextChannel, User, DMChannel, GroupDMChannel, Guild } from "discord.js";

declare interface ClientContext {
    author: User;
    channel: TextChannel | DMChannel | GroupDMChannel;
    guild: Guild;
}

declare interface character {

}

declare interface ClientOptions {
    prefix: string;
}

declare interface ServerOptions {
    databaseUrl: string;
}

declare type Arguments = string[];