//"Listing Tables"

var AWS = require('aws-sdk');

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AKIAS2FVNRIU4YITC3G6";
AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
ddb.listTables({Limit: 10}, function(err, data) {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Table names are ", data.TableNames);
  }
});