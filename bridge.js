const osc = require('osc');

const WebSocket = require('ws');
const server = new WebSocket.Server({
    host: '127.0.0.1',
    port: 8080
});

let socketInstance;

server.on('connection', function (socket) {
    console.log('Somebody Connected!');
    socketInstance = socket;

    socket.on('close', function () {
        socketInstance = undefined;
        console.log('WebSocket closed!');
    });
});

// Create an osc.js UDP Port listening on port 57121.
var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121,
    metadata: true
});

// Listen for incoming OSC messages.
udpPort.on("message", function (oscMsg, timeTag, info) {
    // console.log("An OSC message just arrived!", oscMsg);
    // console.log("Remote info is: ", info);

    if (!socketInstance) {
        console.log('Error! No connection with sockets.');
        return;
    }

    const message = JSON.stringify(oscMsg);

    socketInstance.send(message);

});

// Open the socket.
udpPort.open();
