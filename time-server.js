'use strict';
const net = require('net');
const PORT = Number(process.argv[2]) || 3000;
const server = net.createServer(socket => {
    socket.end(getDate() + '\n');
});
server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = zeroFill(date.getMonth() + 1);
    const day = zeroFill(date.getDate());
    const hours = zeroFill(date.getHours());
    const minutes = zeroFill(date.getMinutes());
    // const seconds = zeroFill(date.getSeconds());
    /* :${seconds} */
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function zeroFill(number) {
    return number < 10 ? `0${number}` : number;
}