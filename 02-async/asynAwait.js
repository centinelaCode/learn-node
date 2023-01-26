


//! Funcion Saludar con asyn-await
async function saludar(nombre) {
   return new Promise((resolve, reject) => {     
      setTimeout(function() {
         console.log(`Hola, ${nombre}`);
         resolve(nombre);
      }, 1500)
   })
}

//! Funcion hablar con asyn-await
async function hablar() {
   return new Promise( (resolve, reject) => {
      setTimeout(function() {
         console.log('Bla bla bla bla bla ....')
         resolve();
      }, 1000)
   })

}

//! Funcion despedida con asyn-await
async function despedida(nombre) {
   return new Promise( (resolve, reject) => {
      // reject('error..............')
      setTimeout(function() {
       console.log('Adios ', nombre)
       resolve();
      }, 1000)
   })
}

async function main() {
   await saludar('Raul');
   await hablar();
   await hablar();
   await hablar();
   await despedida('Raul');
   console.log('-------- Finaliza el proceso -------- ')
}

console.log('-------- Empezamos el proceso -------- ')
main();
