const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://mongo:27017/pastebin';
const APP_PORT = process.env.APP_PORT || 3000;

module.exports = {
    MONGODB_URL,
    APP_PORT
}
