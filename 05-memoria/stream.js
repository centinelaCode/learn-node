
const fs = require('fs');
const stream = require('stream');
const util = require('util');

// let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.setEncoding('utf8');    // decodifica el buffer a caracteres
// readableStream.on('data', function (chunk) {
//    // console.log(chunk);
//    // console.log(chunk.toString());
//    data += chunk;
// });

// readableStream.on('end', function () {
//    console.log('==================')
//    console.log(data);
//    console.log('==================')
// });


// process.stdout.write('Hola');
// process.stdout.write('que');
// process.stdout.write('tal');


const Transform = stream.Transform;

function Mayus() {
   Transform.call(this);   // constructor
}

// util.inherits(Mayus, Transform);
