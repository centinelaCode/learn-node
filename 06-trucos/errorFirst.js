function asincrona(callback) {
   setTimeout(() => {
      try {
         
         let a = 3 + z;
         callback(null, a);

      } catch (e) {
         callback(e, null);
      }
   }, 1000);
}

asincrona(function(err, dato){
   if(err) {
      console.log('Tenemos un error')
      console.log(err)
      
      return false;
   }
})