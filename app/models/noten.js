var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Noten', new Schema({
    modul: String,
    note: String,
    etc: String,
}));