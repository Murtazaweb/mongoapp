/**
 * Created by DELL on 23/08/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Custom validation has to be performed here Later

var appSchema = new Schema({

    name: String,
    project: String

});

// Export Model...
module.exports = mongoose.model('studentrecord',appSchema);