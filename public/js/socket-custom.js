var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});
// listener
socket.on('disconnect', function() {
    console.log('Lost connection to server');
});

// send info to server
socket.emit('sendMessage', {
    user: 'Carolina',
    message: 'Hello world'
}, function(res) {
    console.log('server response:', res);
});

// listen info
socket.on('sendMessage', function(message) {
    console.log('Server:', message);
});