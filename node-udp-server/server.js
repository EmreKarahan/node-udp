var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    var parsedMessage = JSON.parse(message.toString());
    console.log(remote.address + ':' + remote.port +' - ' + parsedMessage);

});


server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});


server.bind(PORT, HOST);