
//USO DE CONTACT
let list = ['JavaScript',' ', 'String',' ', 'Concatenation'];
let result = ''.concat(...list);

console.log(result);


//USO DE String.slice
var cadena1 = "La mañana se nos echa encima.";
var cadena2 = cadena1.slice(3, -2);
console.log(cadena2);


//USO DE trim()
var orig = '   from  ';
console.log(orig.trim()); // 'foo'

// Otro ejemplo de .trim() eliminando el espacio en blanco sólo de un lado.

var orig = 'from    ';
console.log(orig.trim()); // 'foo'



//USO DE String.split 

let mensaje = 'Soy un tipo feliz y afortunado';
// Dividiendo la cadena "mensaje" usando el carácter espacio
let arr = mensaje.split(' ');

// El arreglo
console.log(arr); // ["Soy", "un", "tipo", "feliz", "y", "afortunado"]


// Acceso a cada elemento del arreglo resultante
console.log(arr[0]); // "Soy"
console.log(arr[1]); // "un"
console.log(arr[2]); // "tipo"
console.log(arr[3]); // "feliz"
console.log(arr[4]); // "y",
console.log(arr[5]); // "afortunado"