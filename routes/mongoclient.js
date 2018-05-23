var mongoose = require('mongoose');
var uri = "mongodb://192.168.182.136:27017/myapp";
 const options = {
     socketTimeoutMS: 0,
     keepAlive: true,
     reconnectTries: 30
};
 mongoose.connect(uri,options);
module.exports = mongoose;