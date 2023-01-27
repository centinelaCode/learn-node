
const { exec, spawn } = require('child_process');

//TODO proceso hijo que ejecuta un ls del directorio
// exec('ls -la', (err, stdout, stderr) => {
//    if(err) {
//       console.error(err);
//       return false;
//    }

//    console.log(stdout);
// })

// // TODO proceso hijo que ejecuta otro archivo de node
// exec('node 03-modulos/consola.js', (err, stdout, stderr) => {
//    if(err) {
//       console.error(err);
//       return false;
//    }

//    console.log(stdout);
// })


// TODO proceso hijo que ejecutdo con spawn (hay que requerirlo o importarlo)
let proceso = spawn('ls', ['-la']);

// TODO Identificador delproceso
console.log(proceso.pid)

// TODO Verificar si el proceso esta conectado
console.log(proceso.connected)

// TODO Mostrar el resultado del proceso (que es el listado de archivos)
proceso.stdout.on('data', function(dato) {
   console.log('Esta muerto el proceso:', process.killled)
   console.log(dato.toString());
})

// TODO Saber cuando termine el proceso
proceso.on('exit', function() {
   console.log('El proceso termino.')
   console.log('Esta muerto el proceso:', process.killled)
})