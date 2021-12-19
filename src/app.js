const Logger = require('./libs/logger');

const bannerLogger = require('./libs/banner');

const expressLoader = require('./loaders/express.loader');
const mongooseLoader = require('./loaders/mongoose.loader');
const passportLoader = require('./loaders/passport.loader');
const publicLoader = require('./loaders/public.loader');
const winstonLoader = require('./loaders/winston.loader');
const handlebarLoader = require('./loaders/handlebar.loader');

const log = new Logger(__filename);

// Init loaders
async function initApp() {
    // logging
    winstonLoader();

    // Database with mongoose
    await mongooseLoader();

    // express
    const app = expressLoader();

    // passport init
    passportLoader(app);

    // public Url
    publicLoader(app);

    // handlebar
    handlebarLoader(app);
}

initApp()
    .then(() => bannerLogger(log))
    .catch((error) => log.error(`Application is crashed: ${error}`));
