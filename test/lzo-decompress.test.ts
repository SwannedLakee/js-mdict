import fs from 'node:fs';

import { decompress } from '../src/lzo1x-wrapper.ts';

describe('test decompress', () => {
  it('decomress data', () => {
    const infile = fs.readFileSync('./test/data/compressed.data');
    console.log(infile);

    const data = decompress(infile, 0, 0);
    console.log(data);
  });
});
