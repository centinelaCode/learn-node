
// const process = require('process');

process.on('beforeExit', () => {
   console.log('el proceso va finalizar')
})


process.on('exit', () => {
   console.log('Ale, el proceso finalizo')
})

process.on('uncaughtException', (err, origen) => {
   console.log('Vaya se me a olvidado capturar un error');
   console.log(err);
})


// functionQueNoExiste();

console.log('esto si el error no se recoje, no sale')