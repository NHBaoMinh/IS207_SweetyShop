const path = require('path');
const winston = require('winston');

module.exports = class Logger {
    constructor(scope) {
        this.scope = Logger.parsePathToScope(scope || Logger.DEFAULT_SCOPE);
    }

    static parsePathToScope(filepath) {
        if (filepath.indexOf(path.sep) >= 0) {
            filepath = filepath.replace(process.cwd(), '');
            filepath = filepath.replace(`${path.sep}src${path.sep}`, '');
            filepath = filepath.replace(`${path.sep}dist${path.sep}`, '');
            filepath = filepath.replace('.ts', '');
            filepath = filepath.replace('.js', '');
            filepath = filepath.replace(path.sep, ':');
        }
        return filepath;
    }

    formatScope() {
        return `[${this.scope}]`;
    }

    log(level, message, args) {
        if (winston) winston[level](`${this.formatScope()} ${message}`, args);
    }

    debug(message, ...args) {
        this.log('debug', message, args);
    }

    info(message, ...args) {
        this.log('info', message, args);
    }

    warn(message, ...args) {
        this.log('warn', message, args);
    }

    error(message, ...args) {
        this.log('error', message, args);
    }
};
