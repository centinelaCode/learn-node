

function hola (nombre, miCallback) {
   setTimeout(function() {
      console.log(`Hola, ${nombre}`);
      miCallback(nombre);
   }, 1500)
}

function hablar(callbackHablar) {
   setTimeout(function() {
      console.log('Bla bla bla bla bla ....')
      callbackHablar();
   }, 1000)

}
   
function adios(nombre, otroCallback) {
   setTimeout(function() {
    console.log('Adios ', nombre)
    otroCallback();
   }, 1000)
}

//! Funcion intermedia para eliminar el callback hell
function conversacion(nombre, veces, callback) {
   if (veces > 0) {
      hablar(function(){
         // console.log(veces);
         conversacion(nombre, --veces, callback);
      })
   } else {
      adios(nombre, callback);
   }
}

// proceso principal  ========== Refactorizando el callback hello
console.log('Iniciando proceso.......')
hola('Raul', function(nombre) {
   conversacion('Raul', 5, function() {
      console.log('Proceso terminado.')
   });
});


// hola('Raul', function(nombre) {
//    hablar(function() {
//       hablar(function() {
//          hablar(function() {
//             adios('nombre', function() {
//                console.log('Terminado proceso...')
//             })
//          })
//       })
//    })
// });









// proceso principal  ========== Callback Hell
// console.log('Iniciando proceso.......')
// hola('Raul', function(nombre) {
//    hablar(function() {
//       hablar(function() {
//          hablar(function() {
//             adios('nombre', function() {
//                console.log('Terminado proceso...')
//             })
//          })
//       })
//    })
// });
