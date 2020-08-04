'use strict';
const { ncp } = require('ncp');
const { resolve } = require('path');
const { mkdirSync, rmdirSync, existsSync } = require('fs');

if (existsSync(resolve('./bin'))) {
    rmdirSync(resolve('./bin'), { recursive: true });
}

mkdirSync(resolve('./bin'), { recursive: true });