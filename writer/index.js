const express = require('express')
const axios = require('axios');
const { Paste } = require('./models');
const {
    SHORTENER_URL,
    APP_PORT
} = require('./config')

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    axios.post(SHORTENER_URL).then((shortenerResponse) => {
        const paste = new Paste({
            key: shortenerResponse.data.key,
            name: req.body.name,
            content: req.body.content,
            language: req.body.language
        });

        paste.save().then((obj) => {
            console.log(`Paste with key ${obj.toObject().key} created!`);

            res.json({key: obj.toObject().key});
        }).catch(e => console.log(e));
    });
});

app.listen(APP_PORT, () => {
  console.log(`writer listening on port ${APP_PORT}!`)
});