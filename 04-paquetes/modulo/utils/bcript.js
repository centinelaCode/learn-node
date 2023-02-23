
const bcrypt = require('bcrypt');

const password = '1234segurra!';
const password2 = '1243segurra!';

bcrypt.hash(password,5, function(err, hash) {
   const passwordHasheado = hash;
   console.log(passwordHasheado);

   bcrypt.compare(password2, passwordHasheado, function(err, res) {
      if(res){
         console.log('Password Corerecto')
      } else {
         console.log('Password Incorrecto')
      }
   })
});