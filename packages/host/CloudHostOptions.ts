import { z } from 'zod';
import type { Logger } from 'pino';
import { pino } from 'pino';

export type CloudHostOptionsBag = z.infer<typeof CloudHostOptions.schema>;

export class CloudHostOptions {
    static get schema() {
        return z.object({
            port  : z.number().optional(),
            static: z.string().optional(),
        });
    }

    static toBag = (
        data: CloudHostOptions,
    ): Required<CloudHostOptionsBag> => ({
        port  : data.port,
        static: data.static,
    });

    readonly #port  : number;
    readonly #static: string;

    readonly #log: Logger;

    constructor(data?: CloudHostOptionsBag) {
        this.#port = data?.port ?? 80;
        this.#static = data?.static ?? 'static';


        this.#log = pino({ transport: { target: 'pino-pretty' }});
    }

    get port() { return this.#port; }
    get static() { return this.#static; }
    get log() { return this.#log; }
}
