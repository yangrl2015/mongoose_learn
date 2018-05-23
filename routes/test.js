var mongoose = require('./mongoose_util');

// mongoose.insertOne({
//     name: {
//         first_name: 'yang',
//         second_name: 'ren',
//         last_name: 'long'
//     },
//     age:18,
//     height: 172,
//     physical: 67,
//     math:20,
//     chinese:99
// },function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("result:"+JSON.stringify(result));
//     }
// });
var docs = [];

// for(var i =0;i< 10 ;i++){
//     docs.push( {
//         name: {
//             first_name: 'yang'+i,
//             second_name: 'ren'+i,
//             last_name: 'long'+i
//         },
//         age:18+i,
//         height: 172+i,
//         physical: 67+i,
//         math:20+i,
//         friend:"5b05811a57723b2cb8c3bf67",
//         chinese:99+i
//     });
// }
// mongoose.insertMany(docs,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })
//  mongoose.deleteOne({"name.first_name":/yang1/},function(err,result){
//      if(err){
//          console.log(err);
//      }else{
//          console.log("result:"+JSON.stringify(result));
//      }
//  })
// mongoose.deleteMany({"age":{"$lt":21}},function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('result:'+JSON.stringify(result));
//     }
// })
// mongoose.remove({"age":{"$lt":23}},function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('result:'+JSON.stringify(result));
//     }
// })
var doc = {
    name: {
        first_name: 'yang',
        second_name: 'lai',
        last_name: 'dian'
    },
    age:20,
    height: 176,
    physical:50,
    math:24,
    chinese:100
};
// mongoose.update({age:{"$lte":25}},doc,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("result:"+JSON.stringify(result));
//     }
// });
var conditions = [{filter:{"name.second_name":"ren",age:20},
                   doc:{"name.second_name":"ren10","name.last_name":"long10"}
                  },
                {filter:{"name.second_name":"ren21",age:21},
                 doc:{"name.second_name":"ren11","name.last_name":"long11"}
}];
// mongoose.updateMany(conditions,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("result:"+JSON.stringify(result));
//     }
// });