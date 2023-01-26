

//TODO fs = File System Modulo para el manejo de archivos

const fs = require('fs');

//! Read file
function leer(ruta, cb) {
   fs.readFile(ruta, (err, data) => {
      if (err) {
         console.log('No se ha podido leer el archivo')
         console.log(err.message)
      } else {
         cb( data.toString());
      }
   })
}

//! Write File
function escribir(ruta, contenido, cb) {
   fs.writeFile(ruta, contenido, function(err) {
      if(err) {
         console.log('No se ha podido grabar el archivo')
         console.log(err.message)
      } else {
         console.log('Se ha escrito correctamente');
      }
   })
}

//! Delete file
function eliminar(ruta, cb) {
   // fs.unlink(ruta, function(err) {
   fs.unlink(ruta, function(err) {
      if(err) {
         console.log('No se ha podido eliminar el archivo')
         console.log(err.message)
      } else {
         console.log('Archivo Eliminado correctamente');
      }
   })
}


//! Create Directorio o carpeta
function crearDir(ruta, nameFolder, cb) {
   
   fs.mkdir(`${ruta}/${nameFolder}`, function(err) {
      // console.log(err)
      if(err) {
         switch (err.code) {
            case 'EEXIST':
               console.log('Error directorio ya existe')
               // console.log(err.message)
            break;
            case 'ENOENT':
               console.log('Error ruta no existe')
            break;
         }
         
      } else {         
         console.log('Directorio creado correctamente');
      }
   })
}



//! Delete directorio o folder
function eliminarDir(ruta, cb) {
   // fs.unlink(ruta, function(err) {
   fs.rmdir(ruta, function(err) {
      if(err) {
         // console.log(err)
         switch (err.code) {
            case 'ENOENT':
               console.log('El directorio no existe, No se pudo eliminar')
               // console.log(err.message)   
            break;   
            case 'ENOTEMPTY':
               console.log('El directorio no esta vacio, No se pudo eliminar')
               // console.log(err.message)          
            break;
         }         
      } else {
         console.log('Directorio Eliminado correctamente');
      }
   })
}

//TODO => main
// escribir(__dirname + '/archivo5.txt', 'Soy un archivo nuevo 5....', console.log)
// leer(__dirname + '/myfiles/archivo1.txt', console.log);
// eliminar(__dirname + '/newFolder03/archivo5.txt', console.log)

// crearDir(`${__dirname}`, 'newFolder03', console.log);
eliminarDir(__dirname + '/xxx', console.log)