'use strict';
const { ncp } = require('ncp');
const { resolve } = require('path');
const { mkdirSync, existsSync, rmdirSync } = require('fs');
const pjson = require('../package.json');

const folderToCopy = [{ src: resolve('./src/agent/bin'), dest: resolve(`./s3/v${pjson.version}/agent`) },
                      { src: resolve('./src/self-service/bin'), dest: resolve(`./s3/v${pjson.version}/selfservice`) }];

if (existsSync(resolve(`./s3/v${pjson.version}`))) {
    rmdirSync(resolve(`./s3/v${pjson.version}`), { recursive: true})
}

mkdirSync(resolve(`./s3/v${pjson.version}/agent`), { recursive: true });
mkdirSync(resolve(`./s3/v${pjson.version}/selfservice`), { recursive: true });

folderToCopy.forEach(folder =>
    ncp(folder.src, folder.dest, err => {
        if (err) throw err;
    })
);
