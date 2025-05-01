//importamos el modulo HTTP que viene incluido en Node.js
const PaquetesServidorNodeImportado = require('http');

//definimos un puerto de salida del servidor
const port = 3056;

//crear un servidor
const server = PaquetesServidorNodeImportado.createServer((req,res)=>{
    //establecer el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});

    //Enviamos la respuesta
    res.end('Hola mundo con Node.js');
});

//Escuchar el puerto

server.listen(port,()=>{
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
});