import {ClientOptions, ServerOptions} from './types';

export const clientOptions: ClientOptions = {
    prefix: 'r!',
};

export const serverOptions: ServerOptions = {
    databaseUrl: `http://${process.env.databaseUrl}`
};
