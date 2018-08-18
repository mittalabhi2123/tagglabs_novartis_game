import AWS from 'aws-sdk';
import { getEventsTags } from './util.js'

const getBinary = (encodedFile) => {
  var base64Image = encodedFile.split("data:image/jpeg;base64,")[1];
  var binaryImg = atob(base64Image);
  var length = binaryImg.length;
  var ab = new ArrayBuffer(length);
  var ua = new Uint8Array(ab);
  for (var i = 0; i < length; i++) {
    ua[i] = binaryImg.charCodeAt(i);
  }
  var blob = new Blob([ab], {
    type: "image/jpeg"
  });

  return ab;
}

export const getImageUrl = (clientName, fileName) => {
  initAWS();
  var s3 = new AWS.S3();
  var params = {Bucket: 'tagglabs-processed', Key: clientName + '/' + fileName, Expires: 600};
  var url = s3.getSignedUrl('getObject', params);
  console.log("get URL is:", url);
  if (url.endsWith(".com/")) {
    url = url + 'tagglabs-processed/' + clientName + '/' + fileName;
  }
  return url;
}

export const register = (email, name, empId, updateScoreGameNum) => {
  var ddb = new AWS.DynamoDB.DocumentClient();
  var params = {
    ExpressionAttributeValues: {
      ':email': email
     },
   KeyConditionExpression: 'Email = :email',
   TableName: 'NovartisEmployees'
  };
  ddb.query(params, function(err, data) {
    if (err) {
      console.log("Error", err);

    } else {
      if (!data.Items.length) {
        var params2 = {
          TableName: 'NovartisEmployees',
          Item: {
            "Email": email,
            "Name": name,
            "EmpId": empId,
            "Games": {},
          }
        };
        ddb.put(params2, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
                updateScoreGameNum('game', 1, email, name, empId, 0);
            }
        });
      } else {
        // If data already exists
        const numGames = Object.keys(data.Items[0].Games).length;
        const totalScore = Object.keys(data.Items[0].Games).length ? Object.keys(data.Items[0].Games).map(
          obj => data.Items[0].Games[obj])
          .reduce((total, num) => total+num) : 0;
        updateScoreGameNum('game', numGames+1, email, name, empId, totalScore);
      }
    }
  });
}

export const fetchLoggedInData = (client, updateState) => {
  if (client === '') {
    return [];
  }
  initAWS();
  var ddb = new AWS.DynamoDB();
  var params = {
    ProjectionExpression: "#nm, Email, ContactNumber, LoginTime, ImageFile, UserId",
    TableName: "Users",
    FilterExpression: "#clientCol = :clientName",
    ExpressionAttributeNames: {
        "#clientCol": "Client",
        "#nm": "Name",
    },
    ExpressionAttributeValues: {
        ":clientName": {'S': client}
    }
  };
  console.log(JSON.stringify(params));
  ddb.scan(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
        updateState(data);
      }
  });
}

export const fetchSearchItems = (updateEvents) => {
  initAWS();
  var ddb = new AWS.DynamoDB();
  var params = {
    ProjectionExpression: "EventId, #nm, #seq",
    TableName: "NovartisEvents",
    ExpressionAttributeNames: {
        "#nm": "Name",
        "#seq": "Sequence",
    },
  };
  console.log(JSON.stringify(params));
  ddb.scan(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
        updateEvents(data);
      }
  });
}

export const fetchDistinctClients = (updateState) => {
  initAWS();
  var ddb = new AWS.DynamoDB();
  var params = {
    ProjectionExpression: "Client",
    TableName: "Users"
  };

  ddb.scan(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
        var distinctClients = new Set();
        data.Items.forEach(function(element, index, array) {
          distinctClients.add(element.Client.S);
        });
        updateState(distinctClients);
      }
  });
}

export const initAWS = () => {
  AWS.config.region = 'us-west-2'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-west-2:26f1c560-b330-4174-ab8c-da8b1b64a736',
  });
}

export const fetchUserDataByImage = (webcamImage, updateState, stopTimer, event, email) => {
  var rekognition = new AWS.Rekognition();
  var params = {
    Image: {
      Bytes: getBinary(webcamImage),
    },
    MaxLabels: 123,
    MinConfidence: 40
  };
  rekognition.detectLabels(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log('data', data);
      const eventTags = getEventsTags(event);
      console.log("eventTags", eventTags);
      data.Labels.forEach(obj => {
        if (eventTags.indexOf(obj.Name) >= 0) {
          var ddb = new AWS.DynamoDB.DocumentClient();
          var params = {
              TableName: "NovartisEmployees",
              Key: {
                  "Email": email
              },
              UpdateExpression: "set #games.#event=:score",
              ExpressionAttributeNames: {
                  "#games": "Games",
                  "#event": event,
              },
              ExpressionAttributeValues: {
                  ":score": Math.round(obj.Confidence),
              }
          };
          ddb.update(params, function(err, data) {
              if (err) {
                  console.log("Error", err);
              } else {
                  console.log("Score updated....Timer stopped...");
                  stopTimer();
                  updateState(true, Math.round(obj.Confidence));
              }
          });
        }
      });
    }
  });
}
