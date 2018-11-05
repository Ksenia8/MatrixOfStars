"use strict";

const http = require("http");
const port = 3000;

const requestHandler = (request, response) => {
    console.log("Запрошен адрес: " + request.url);

    response.writeHead(200, {"Content-type": "text/plain;charset=utf-8"});
    response.end('Ответ сервера!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log("Случилось плохое зло: ", err);
    }

    console.log(`сервер запущен, порт: ${port}`);
});