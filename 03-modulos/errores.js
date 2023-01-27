function otraFuncion() {
   serompe();
}

function serompe() {
   return 3 + z;
}

function seRompeAsync(cb) {
   setTimeout(() => {
      try {
         return 3 + x;         
      } catch (err) {
         console.error('Error en mi funcion asincrona')
         cb(err)
      }
   }, 2000);
}

try {
   // otraFuncion();
   seRompeAsync(function(err) {
      console.log('Hay error')
      console.log(err.message)
   });
} catch (error) {
   console.log('Vaya, algo se roto.....')
   console.log(error.message)
   console.log('Se presento un error pero lo hemos capturado')
}

console.log('esto de aqui al final')