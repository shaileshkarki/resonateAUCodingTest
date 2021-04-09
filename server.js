const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var Twitter = require('twitter');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const port = process.env.PORT || 4000;

apikey = process.env.apikey,
apikeysecret = process.env.apikeysecret,
accesstokenkey = process.env.accesstokenkey,
accesstokensecret = process.env.accesstokensecret
bearertoken = process.env.bearertoken

var client = new Twitter({
    consumer_key: apikey,
    consumer_secret: apikeysecret,
    bearer_token: bearertoken,
    access_token_key: process.env.accesstokenkey,
    access_token_secret: process.env.accesstokensecret
});

app.get('/', (req, res) => {
    res.json({"result":'hello from ResonateAU server'})
})

app.get('/resonateau',(req,res) => {
    var params = {screen_name : 'resonateAU'}
    client.get('statuses/user_timeline',params, function(error, tweets, response){
        if(!error) {
            res.json(tweets);
        }
    })
})


app.listen(port, () => {
    console.log(`ResonateAU server listening on port 4000`);
    
})