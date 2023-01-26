
//! Funcion Saludar con promises
function saludar(nombre) {
   return new Promise((resolve, reject) => {
      // reject('error..............')
      setTimeout(function() {
         console.log(`Hola, ${nombre}`);
         resolve(nombre);
      }, 1500)
   })
}

//! Funcion hablar con promises
function hablar(nombre) {
   return new Promise( (resolve, reject) => {
      setTimeout(function() {
         console.log('Bla bla bla bla bla ....')
         resolve(nombre);
         // reject('Algo paso... error inesperado')
      }, 1000)
   })

}

//! Funcion despedida con promises
function despedida(nombre) {
   return new Promise( (resolve, reject) => {
      // reject('error..............')
      setTimeout(function() {
       console.log('Adios ', nombre)
       resolve();
      }, 1000)
   })
}



//? Inicio de la aplicación
console.log('Iniciando el proceso...');
saludar('Raul')   
   .then( hablar )
   .then( despedida )
   .then( () => {      
      console.log('Terminado el Proceso');
   })
   .catch( error => { 
      console.error('Ha habido un Error');
      console.error(error);
    })




   // forma con mas detalle
   // console.log('Iniciando el proceso...');
   // saludar('Raul')
   //    .then( nombre => {
   //       return despedida(nombre);
   //    })
   //    .then( (nombre) => {      
   //       console.log('Terminado el Proceso');
   //    })  