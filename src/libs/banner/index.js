const env = require('../../configs/env');

module.exports = (log) => {
    if (env.app.banner) {
        const route = () => `${env.app.schema}://${env.app.host}:${env.app.port}`;
        log.info(``);
        log.info(`Sheeh, your app is ready on ${route()}`);
        log.info(`To shut it down, press <CTRL> + C at any time.`);
        log.info(``);
        log.info('----------------------------------------------------');
        log.info(`Environment  : ${env.node}`);
        log.info(`Version      : ${env.app.version}`);
        log.info(``);
        log.info(`API Info     : ${route()}`);
        log.info('----------------------------------------------------');
        log.info('');
    } else {
        log.info(`Application is up and running.`);
    }
};
