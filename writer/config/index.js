const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017/pastebin';
const KEY_GENERATOR_URL = process.env.KEY_GENERATOR_URL || 'http://key-generator:3000';
const APP_PORT = process.env.APP_PORT || 3000;

module.exports = {
    MONGO_URL,
    KEY_GENERATOR_URL,
    APP_PORT
}
