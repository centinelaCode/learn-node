

// function soyAsincrona (miCallback) {
//    // console.log('Hola, aqui no soy una funcion asincrona')
//    setTimeout(function() {
//       console.log('Estoy siendo asincrona')
//       miCallback();
//    }, 2000)
// }

// console.log('Iniciando proceso.......')
// soyAsincrona(function() {
//    console.log('Terminado proceso.......')
// });


function saludar (nombre, miCallback) {
   setTimeout(function() {
      console.log(`Hola, ${nombre}`);
      miCallback(nombre);
   }, 1500)
}

function despedida(nombre, otroCallback) {
   setTimeout(function() {
    console.log('Adios ', nombre)
    otroCallback();
   }, 1000)
}

console.log('Iniciando proceso.......')
saludar('Raul', function(nombre) {
   despedida('nombre', function() {
      console.log('Terminado proceso.......')
   })
});

