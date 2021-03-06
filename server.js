// =================================================================
// packete importieren  ========================================
// =================================================================
var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var jwt    = require('express-jwt'); // zum erstellen und verifizieren von tockens
var jwt2 = require('jsonwebtoken');
var config = require('./config'); // zum getten der config datei
var cors = require('cors');

//Modele einbinden
var User   = require('./app/models/user'); // getten der mongose datei
var Noten  = require('./app/models/noten');
var ToDO   = require('./app/models/todo');
var Events = require('./app/models/events');
var ObjectId = require('mongodb').ObjectID;

// =================================================================
// konfiguration ===================================================
// =================================================================
var port = process.env.PORT || 8080;
mongoose.connect(config.database); // db verbindung
app.set('Secret', config.secret); // geheime variable
app.use(cors());// damit der server CRUD annimmt

// zum Parsen
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

// ---------------------------------------------------------
// authentifizierung
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
apiRoutes.post('/authenticate', function(req, res) {

    // find the user
    User.findOne({
        lname: req.body.lname
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.status(401).json({ success: false, message: 'Falscher Benutzer. Benutzer nicht gefunden.' });
        } else if (user) {

            // passwordkontrolle
            if (user.password != req.body.password) {
                res.status(401).json({ success: false, message: 'Falsches Passwort.' });
            } else {

                // wenn Benutzer und password passen
                // erstelle token
                var payload = {
                    admin: user.admin
                }
                var token = jwt2.sign(payload, config.secret, { expiresIn: 86400 // läuft in 24 Stunden ab
                });

                res.status(200).json({
                    success: true,
                    message: 'Enjoy your token!',
                    id_token: token
                });
            }

        }

    });
});

apiRoutes.use(jwt({ secret: config.secret}).unless({path: ['/authorization']}));

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
            res.send("Benutzer wurde angelegt");
        })
        .catch(err => {
            res.status(400).send("Benutzer konnte nicht gespeichert werden");
        });
});

//Crud Events

apiRoutes.get('/events', function (req, res) {
    Events.find({},function (err, events) {
        res.json(events);
    })
});

apiRoutes.post('/events',(req, res)=>{
    var myEvents = new Events(req.body);
    myEvents.save()
        .then(item=>{res.send("Event ist angelegt");
        })
        .catch(err=>{
            res.status(400).send('Event konnte nicht gespeichert werden');
        })
})

apiRoutes.delete('/events/',(req, res)=> {
  Events.findByIdAndRemove(req.query._id, function (err, event) {
      console.log(req);
      if (err)
          throw err;
       res.json({ success: true, message: "Deleted" });})

});

//CRUD Noten
apiRoutes.get('/noten', function (req, res){
    Noten.find({}, function (err,noten) {
        res.json(noten);

    });
});
apiRoutes.post('/noten', function (req, res) {
    var savePromises = [];
    req.body.forEach(function(note) {
        var daten = new Noten(note); // todo in note umbennen
        savePromises.push(daten.save())
    });
    Promise.all(savePromises)
        .then(item =>{
            res.send('Noten wurden auf die DB gespeichert');
        })
        .catch(err=>{
            console.log(err);
            res.status(400).send('Konnte nicht auf der DB gespeichert werden');
        });
});
apiRoutes.delete('/noten',(req,res)=>{
    Noten.findByIdAndRemove(req.query._id, function(err, note){
        console.log(req);
        if(err)
            throw err;
        res.json({ success: true, message: "Deleted"});
    })
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
        .then(item =>{res.send('To-Do´s wurden auf die DB gespeichert');})
        .catch(err=>{res.status(400).send('Konnte nicht auf der DB gespeichert werden')
        });

});

apiRoutes.delete('/todo/',(req, res)=> {
    ToDO.findByIdAndRemove(req.query._id, function (err, newTodo) {
        console.log(req);
        if (err)
            throw err;
        res.json({ success: true, message: "Deleted" });})

});

apiRoutes.put('/todo', function (req, res) {
    ToDO.updateOne({},)

});

apiRoutes.get('/check', function(req, res) {
    res.json(req.decoded);
});

app.use('/api', apiRoutes);

// =================================================================
// start den server ================================================
// =================================================================
app.listen(port);
console.log('Start des Servers http://localhost:' + port);