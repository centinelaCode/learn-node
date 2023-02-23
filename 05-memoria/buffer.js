// craemos un buffer

let buffer1 = Buffer.alloc(1);            // <Buffer 00>
let buffer2 = Buffer.alloc(4);            // <Buffer 00 00 00 00>

let buffer3 = Buffer.from([1,2,3]);       // <Buffer 01 02 03>
let buffer4 = Buffer.from([1,2,5]);       // <Buffer 01 02 05>
let buffer5 = Buffer.from('Hola');        // <Buffer 48 6f 6c 61>

console.log(buffer1);
console.log(buffer2);

console.log(buffer3);
console.log(buffer4);

console.log(buffer5);               // Asina 40 para la H, 6f para la o y asi para cada letra
console.log(buffer5.toString());    // muestra el texto 

// abecedario con buffers
let abc = Buffer.alloc(27);         // creamos el buffer con 26 espacios vacios
         // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

for (let i = 0; i < 27; i++) {   
   abc[i] = i + 97;               
}
console.log(abc)
console.log(abc.toString())