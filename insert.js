var AWS = require('aws-sdk');

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AKIAS2FVNRIU4YITC3G6";
AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

var ddb = new AWS.DynamoDB();

var params = {
    TableName: 'CUSTOMER_LIST',
    Item: {
      'CUSTOMER_ID' : {N: '001'},
      'CUSTOMER_NAME' : {S: 'Asrita'},
      'CUSTOMER_AGE' : {N: '21'}
    }
  };
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });