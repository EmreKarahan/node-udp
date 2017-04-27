var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var cron = require('cron');
var message = new Buffer('My KungFu is Good!');





var cronJob = cron.job("*/5 * * * * *", function () {
    var client = dgram.createSocket('udp4');
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        client.close();
    });
});
cronJob.start();