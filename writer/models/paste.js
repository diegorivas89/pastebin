const mongoose = require('mongoose');
const { MONGO_URL } = require('../config');

mongoose.connect(MONGO_URL);

const Paste = mongoose.models.paste || mongoose.model('paste', {
    key: String,
    name: String,
    content: String,
    language: String
});

module.exports = Paste;