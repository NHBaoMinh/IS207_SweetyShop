const dotenv = require('dotenv');
const path = require('path');

const pkg = require('../../package.json');
const { getOsEnvOptional, getOsEnv, normalizePort, toBool, toNumber } = require('../libs/os');

/**
 * Load .env file or for tests the .env.test, .env.production file.
 */
dotenv.config({ path: path.join(process.cwd(), `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`) });

/**
 * Environment variables
 */

const env = {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    app: {
        name: getOsEnv('APP_NAME'),
        version: pkg.version,
        description: pkg.description,
        host: getOsEnv('APP_HOST'),
        schema: getOsEnv('APP_SCHEMA'),
        port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
        banner: toBool(getOsEnv('APP_BANNER')),
    },
    database: {
        connection: getOsEnv('DB_CONNECTION'),
    },
    log: {
        level: getOsEnv('LOG_LEVEL'),
        json: toBool(getOsEnvOptional('LOG_JSON')),
        output: getOsEnv('LOG_OUTPUT'),
    },
    passport: {
        jwtToken: getOsEnv('PASSPORT_JWT'),
        google: {
            clientID: getOsEnv('GOOGLE_CLIENT_ID'),
            clientSecret: getOsEnv('GOOGLE_CLIENT_SECRET'),
        },
        facebook: {
            clientID: getOsEnv('FACEBOOK_CLIENT_ID'),
            clientSecret: getOsEnv('FACEBOOK_CLIENT_SECRET'),
        },
        jwtAccessExpired: toNumber(getOsEnv('PASSPORT_JWT_ACCESS_EXPIRED')),
        jwtRefreshExpired: toNumber(getOsEnv('PASSPORT_JWT_REFRESH_EXPIRED')),
    },
};

module.exports = env;
