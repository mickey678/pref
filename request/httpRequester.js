/* globals require */
const request = require("request");
module.exports = {
    get(url){
        const promise = new Promise(function(resolve,reject){
            request(url,(err,res,body)=>{

               if(err){
                   return reject(err);
               }
               resolve(res);
            });
        });
       return promise;
    }
}