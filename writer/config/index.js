const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://mongo:27017/pastebin';
const SHORTENER_URL = process.env.SHORTENER_URL || 'http://shortener:3000';
const APP_PORT = process.env.APP_PORT || 3000;

module.exports = {
    MONGODB_URL,
    SHORTENER_URL,
    APP_PORT
}
