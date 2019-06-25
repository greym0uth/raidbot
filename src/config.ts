import {ClientOptions, ServerOptions} from './types';

export const defaultClientOptions: ClientOptions = {
    prefix: 'r!',
};

export const serverOptions: ServerOptions = {
    databaseUrl: `http://${process.env.databaseUrl}`
};
