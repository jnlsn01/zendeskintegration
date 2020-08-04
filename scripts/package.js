'use strict';
const { ncp } = require('ncp');
const { resolve } = require('path');
const { mkdirSync, existsSync, rmdirSync } = require('fs');

const folderToCopy = [{ src: resolve('./agent/bin'), dest: resolve('./s3/agent') },
                      { src: resolve('./self-service/bin'), dest: resolve('./s3/selfservice') }];

if (existsSync(resolve('./s3'))) {
    rmdirSync(resolve('./s3'))
}

mkdirSync(resolve('./s3/agent'), { recursive: true });
mkdirSync(resolve('./s3/selfservice'), { recursive: true });

folderToCopy.forEach(folder =>
    ncp(folder.src, folder.dest, err => {
        if (err) throw err;
    })
);
