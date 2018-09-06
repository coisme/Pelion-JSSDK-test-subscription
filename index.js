var dateformat = require('dateformat');
var MbedCloudSDK = require("mbed-cloud-sdk");

var connect = new MbedCloudSDK.ConnectApi({
    apiKey: "<< YOUR API KEY >>"
});

var deviceId = "<< YOUR DEVICE ID >>"; // Endpoint Name
var resourceURI = "/3200/0/5501";  // Button Count

console.log("To close the app, type \"quit\" + ENTER");

connect.addResourceSubscription(deviceId, resourceURI, data => {
    console.log(dateformat(new Date(), 'isoTime') + " btnCnt=" + JSON.stringify(data));
})
.then(asyncId => {
    console.log(dateformat(new Date(), 'isoTime') + " asyncId=" + JSON.stringify(asyncId));
})
.catch(error => {
    console.log(dateformat(new Date(), 'isoTime') + " " + JSON.stringify(error));
});

// Handles 'Q' for quit this program
process.stdin.on('data', function(chunk) {
    if(chunk.includes("quit")){
        console.log("Deleting subscription...");
        connect.deleteResourceSubscription(deviceId, resourceURI)
        .then(response => {
            console.log("bye.");
            process.exit(0);
        })
        .catch(error => {
            console.log(dateformat(new Date(), 'isoTime') + " " + JSON.stringify(error));
        });
    }
});
