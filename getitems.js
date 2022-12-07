//Get Items or Display Items:

var AWS = require('aws-sdk');

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AKIAS2FVNRIU4YITC3G6";
AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

//Read Items in Table

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'CUSTOMER_LIST',
  Key: {
    'CUSTOMER_ID': {N: "1"},
    'CUSTOMER_NAME': {S: "Asrita"}
  }
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});