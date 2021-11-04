const express = require('express')
const { Paste } = require('./models')
const { APP_PORT } = require('./config');

const app = express();
app.use(express.json());

app.get('/:key', (req, res) => {
    Paste.findOne({ key: req.params.key }).then((obj) => {
        if (!obj) {
            res.status(404).json({error: "not found"});

            return;
        }

        res.json({
            key: obj.toObject().key,
            name: obj.toObject().name,
            content: obj.toObject().content,
            language: obj.toObject().language
        });
    });
});

app.listen(APP_PORT, () => {
  console.log(`reader listening on port ${APP_PORT}!`);
});