var mongoose = require('mongoose');
var mongooseConnection = require('./mongoclient');
var schema = new mongoose.Schema(
    {
        name: {type:Object},
        age: {type:Number,min:[1,'age >=1'],max:[176,'not person']},
        height:Number,
        friend:{type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        math:Number,
        physical:Number,
        chinese:Number

    });
var model = mongooseConnection.model('user',schema);
module.exports = model;