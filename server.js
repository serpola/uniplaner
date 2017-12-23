// =================================================================
// get the packages we need from burak ========================================
// =================================================================
var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var jwt    = require('jsonwebtoken'); // zum erstellen und verifizieren von tockens
var config = require('./config'); // zum getten der config datei
//Modele einbinden

var User   = require('./app/models/user'); // getten der mongose datei
var Noten  = require('./app/models/noten');
var ToDO   = require('./app/models/todo');
var Kalender = require('./app/models/kalender');
// =================================================================
// configuration ===================================================
// =================================================================
var port = process.env.PORT || 8080;
mongoose.connect(config.database); // db verbindung
app.set('Secret', config.secret); // geheime variable

// zum Parsen
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('static'))
// morgen zum logen in der konsole
app.use(morgan('dev'));

// =================================================================
// routes ==========================================================
// =================================================================
app.get('/setup', function(req, res) {
    // beispiel benutzer erstellen
    var nick = new User({
        lname: 'admin',
        vname: 'max',
        nname: 'musterman',
        password: 'password',
        anschrift: 'musterstrasse 1',
        admin: true
    });
    nick.save(function(err) {
        if (err) throw err;

        console.log('Benutzer erfolgreich gespeichert');
        res.json({ success: true });
    });
});

// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router();

// standart route (http://localhost:8080)
app.get('/', function(req, res) {
    res.send('Hallo die API läuft auf http://localhost:' + port + '/api');
});



// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
apiRoutes.post('/authenticate', function(req, res) {

    // find the user
    User.findOne({
        lname: req.body.lname
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var payload = {
                    admin: user.admin
                }
                var token = jwt.sign(payload, app.get('Secret'), {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });
});

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
/*apiRoutes.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }

});*/

// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Willkommmen bei Unserer Api' });
});


//CRUD Users
apiRoutes.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
});

apiRoutes.post("/users", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//CRUD Noten
apiRoutes.get('/noten', function (req, res){
    Noten.find({}, function (err,noten) {
        res.json(noten);

    });
});
apiRoutes.post('/noten', function (req, res) {
    var daten = new Noten(req.body);
    daten.save()
        .then(item =>{
            res.send('Noten wurden auf die DB gespeichert');
        })
        .catch(err=>{
            res.status(400).send('Konnte nicht auf der DB gespeichert werden');
        });
});

//CRUD to-Do
apiRoutes.get('/todo', function (req, res) {
    ToDO.find({}, function (err, todo) {
        res.json(todo);
    });

});

apiRoutes.post('/todo', function (req, res) {
    var daten = new ToDO(req.body);
    daten.save()
        .then(item =>{res.send('Noten wurden auf die DB gespeichert');})
        .catch(err=>{res.status(400).send('Konnte nicht auf der DB gespeichert werden')
        });

});


apiRoutes.put('/todo', function (req, res) {
    ToDO.updateOne({},)

})

apiRoutes.get('/check', function(req, res) {
    res.json(req.decoded);
});










app.use('/api', apiRoutes);

// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log('Start des Servers http://localhost:' + port);