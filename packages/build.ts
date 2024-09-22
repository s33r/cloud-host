import * as esbuild from 'esbuild';
import { cp, rm } from 'fs/promises';
import { resolve } from 'path';

const outputRoot = resolve(import.meta.dirname, '../dist');
const inputRoot = import.meta.dirname;

const buildPackage = async (
    packageName: string,
    platform: 'browser' | 'node',
) => {
    const packageLocation = resolve(inputRoot, packageName);
    const staticLocation = resolve(packageLocation, 'static');

    const inLocation = resolve(packageLocation, 'index.ts');
    const outLocation = resolve(outputRoot, packageName);

    await esbuild.build({
        platform,
        outdir     : outLocation,
        bundle     : true,
        minify     : true,
        sourcemap  : true,
        entryPoints: [
            {
                in : inLocation,
                out: 'index',
            },
        ],
    });

    await cp(staticLocation, outLocation, { recursive: true });
};


(async () =>  {
    await rm(outputRoot, { force: true, recursive: true });

    await buildPackage('host', 'node');
    await buildPackage('client', 'browser');
    await buildPackage('api', 'node');
})();
