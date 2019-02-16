const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
exports.handler = (event, context, callback) => {
    let scanningParameters = {
        TableName: 'application',
        Limit: 100 //maximum result of 100 items
    };

   docClient.scan(scanningParameters, function(err,data){
        if(err){
            callback(err, null);
        }else{
            callback(null,data);
        }
    });
};
