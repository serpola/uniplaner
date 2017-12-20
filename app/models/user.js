var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    lname: String,
    vname: String,
    nname: String,
    password: String,
    anschrift: String,
    admin: Boolean,
}));