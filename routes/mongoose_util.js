var mongoose = require('./mongoclient');
var userModel = require('./UserModel');

var insertOne = function(doc,callback){
    var mongooseEntity = new userModel(doc);
    mongooseEntity.save(callback);
};
var insertMany = function (docs,callback){
    var options ={
        ordered:false, //如果设置为false 遇到错误不立即返回，
        rawResult:false
    }
    userModel.insertMany(docs,options,callback);
};
var deleteOne = function (conditions,callback){
    userModel.deleteOne(conditions,callback);
};
var deleteMany = function (conditions,callback) {
    userModel.deleteMany(conditions,callback);
};
var remove = function (conditons,callback){
   userModel.remove(conditons,callback);
};

var update = function (conditions,doc,callback){
    var options = {
        upsert:false,//如果conditions不存在则插入
        multi:true // 如果为true 更新多个
    };
    userModel.update(conditions,doc,options,callback);
};
var updateMany = function(conditions,callback){
    var updateConditions = [];
    for(var i =0 ; i < conditions.length ; i++ ){
        updateConditions.push({ updateOne :
            {
                "filter" : conditions[i].filter,
                "update" : conditions[i].doc,
            }
        })
    }
    userModel.bulkWrite(updateConditions,callback);

};
module.exports = {
    "insertOne":insertOne,
    "insertMany":insertMany,
    "deleteOne":deleteOne,
    "deleteMany":deleteMany,
    "remove":remove,
    "update":update,
    "updateMany":updateMany

}