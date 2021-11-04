const express = require('express')
const app = express();

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
    res.send({key: generateKey(7)});
});

app.listen(3000, () => {
  console.log('Example app listening on port 8000!')
});