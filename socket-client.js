var socket = new WebSocket("ws://127.0.0.1:8080");

socket.onopen = function () {
    console.log("Connected!");
};

socket.onclose = function (event) {
    if (event.wasClean) {
        console.log('Connection was closed and its okay');
    } else {
        console.log('Connection closed. Anything alright?'); // for example websocket server offline
    }
    console.log('Code: ' + event.code + ' Reason: ' + event.reason);
};

socket.onmessage = function (event) {
    try {
        const data = JSON.parse(event.data);
        console.log("Recieved data", data);
    } catch (e) {
        console.error('Can\'t recognize. Is data an object?', e);
    }
};

socket.onerror = function (error) {
    console.log("Error " + error.message);
};
