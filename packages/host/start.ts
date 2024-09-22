import { CloudHostOptions } from './CloudHostOptions.js';
import express from 'express';

export const start = async (
    options: CloudHostOptions = new CloudHostOptions(),
) => {
    options.log.info('Initializing Server...');
    options.log.info(CloudHostOptions.toBag(options));

    const application = express();

    application.use(express.static(options.static));

    application.get('/pulse-check', (request, response) => {
        const result = {
            up     : process.uptime(),
            time   : Date.now(),
            message: 'Hello world!',
        };

        options.log.info(result, 'pulse-check');

        response.json(result);
    });

    options.log.info('Starting Server...');

    application.listen(options.port, () => {
        options.log.info(`Started Server - Listening on http://localhost:${ options.port }`);
    });
};
