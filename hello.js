var http = require("http");

var controlador = function(solicitud, respuesta){
    console.log("Hola Mundo");
    respuesta.end();
}

var servidor = http.createServer(controlador);

servidor.listen(8181);