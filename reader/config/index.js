const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017/pastebin';
const APP_PORT = process.env.APP_PORT || 3000;

module.exports = {
    MONGO_URL,
    APP_PORT
}
