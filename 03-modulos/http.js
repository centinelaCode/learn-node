const http = require('http');


//TODO Creando un servidor basico
http.createServer(router).listen(3000);

function router(req, res) {
   console.log('Nueva petición!')
   console.log(req.url);
   res.writeHead(201, {'content-Type': 'text/plain'});

   switch (req.url) {
      case '/hola':
         res.write('Hola, que tal');
         res.end();
         break;
   
      default:
         res.write('Error 404: No se que e slo que queires');
         res.end();
         break;
   }

   // res.writeHead(201, {'content-Type': 'text/plain'});

   // // respuesta al usuario
   // res.write('Hola, ya se usar http de node.js');

   // res.end();
}

console.log('Escuchando http en el puerto 3000');