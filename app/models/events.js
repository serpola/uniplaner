var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('events', new Schema({
    date: String,
    title: String,
    beschr: String,
}));