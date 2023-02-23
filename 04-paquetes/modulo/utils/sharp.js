const sharp = require('sharp');

sharp('./goku.jpg')
   .resize(2400)  // redimencina la imagen
   .greyscale()   // la pone en escala de grises
   .toFile('./goku_40.jpg')  // la ruta donde la va guardar