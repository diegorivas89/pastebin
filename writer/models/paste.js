const mongoose = require('mongoose');
const { MONGODB_URL } = require('../config');

mongoose.connect(MONGODB_URL);

const Paste = mongoose.models.paste || mongoose.model('paste', {
    key: String,
    name: String,
    content: String,
    language: String
});

module.exports = Paste;