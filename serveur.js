var express = require('express');
var serve_static = require('serve-static');
var http = require('http');
const fs = require('fs');
var path = require('path');
const session = require('express-session');
var bodyParser = require('body-parser')
// const metadata = require('gcp-metadata');
// const {OAuth2Client} = require('google-auth-library');


// const oAuth2Client = new OAuth2Client();
// let aud;

var app = express();

// async function audience() {
//     if (!aud && (await metadata.isAvailable())) {
//       let project_number = await metadata.project('numeric-project-id');
//       let project_id = await metadata.project('project-id');
  
//       aud = '/projects/' + project_number + '/apps/' + project_id;
//     }
  
//     return aud;
//   }

//   async function validateAssertion(assertion) {
//     if (!assertion) {
//       return {};
//     }
  
//     // Check that the assertion's audience matches ours
//     const aud = await audience();
  
//     // Fetch the current certificates and verify the signature on the assertion
//     const response = await oAuth2Client.getIapPublicKeys();
//     const ticket = await oAuth2Client.verifySignedJwtWithCertsAsync(
//       assertion,
//       response.pubkeys,
//       aud,
//       ['https://cloud.google.com/iap']
//     );
//     const payload = ticket.getPayload();
  
//     // Return the two relevant pieces of information
//     return {
//       email: payload.email,
//       sub: payload.sub,
//     };
//   }
  

app.use(session({

    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}));

// app.get('/', async (req, res) => {
//     const assertion = req.header('X-Goog-IAP-JWT-Assertion');
//     let email = 'None';
//     try {
//       const info = await validateAssertion(assertion);
//       email = info.email;
//     } catch (error) {
//       console.log(error);
//     }
//     res.status(200).send(`Hello ${email}`).end();
//   });
  



app.use(express.static(__dirname + '/public'));
var serveur = http.Server(app);

let database = JSON.parse(fs.readFileSync('pokedex.json', 'utf-8'));



app.get('/pokemons', function(req, res) {
    // let sess = req.session;
    // if (sess.user) {
        res.send(database.pokemons);

    //     res.redirect('/index');
    // }
    // else {
    //     res.redirect('/login');
    // }

   
});

app.get('/tableau', function(req, res){

    res.send(database.pokemons);
});

app.get('/menu', function(req, res){
    res.redirect('/menu.html');
});

app.get('/types', function(req, res) {

    let tab = [];
    for(let i = 0; i < database.types.length; i++) {
        tab.push(database.types[i].nom);
    }


    res.send(tab);
});

app.get('/pokemons/alea', function(req, res) {

    let tab = [];
    for(let i = 0; i < database.pokemons.length; i++) {
        tab.push(database.pokemons[i]);
    }

    let alea = Math.floor(Math.random() * tab.length);
    console.log(tab[0]);

    res.send(tab[alea]);

});

app.get('/pokemons/:types', function(req, res) {
    
    let tab = [];


    for( let i = 0; i < database.pokemons.length; i++){
        for( let j = 0; j < database.pokemons[i].types.length; j++){

        if(database.pokemons[i].types[j].nom == req.params.types){
            tab.push(database.pokemons[i]);
            }
        }
    }
    res.send(tab);
});

app.listen(8082);