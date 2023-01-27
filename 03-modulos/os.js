
const os = require('os');

//TODO arquitectura del sistema operativo (x86 o x64)
console.log('Arquitectura:', os.arch());

 //TODO plataforma (windows, linux o MacOS, android, etc)
console.log('Plataforma:', os.platform());

//TODO los CPU de tu equipo
console.log(os.cpus());
console.log('Numero CPUs:', os.cpus().length);  // numero de nucleos

//TODO errores del sistema
console.log(os.constants);

//TODO Memoria del equipo
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log('Bytes:', os.freemem());
console.log('KBytes:', kb(os.freemem()));
console.log('MBytes:', mb(os.freemem()));
console.log('GBytes:', gb(os.freemem()));

console.log('Mem Total:', gb(os.totalmem()));


console.log('Home Dir:', os.homedir());
console.log('Temp Dir:', os.tmpdir());
console.log('Host Name:', os.hostname());

console.log(os.networkInterfaces());


