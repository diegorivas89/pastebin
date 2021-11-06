const express = require('express')
const app = express();

const APP_PORT = process.env.APP_PORT || 3000;
const KEY_LENGHT = process.env.KEY_LENGHT || 7;

function generateKey(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

app.post('/', (req, res) => {
    res.send({key: generateKey(KEY_LENGHT)});
});

app.listen(APP_PORT, () => {
  console.log('Example app listening on port 8000!')
});