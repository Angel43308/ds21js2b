var Pos=parseFloat(prompt("Ingresa la posicion: "));
var num=parseFloat(prompt("Ingresa el numero: "));

let cad=['1','2','3'];

console.log("Original: " + cad);

cad.splice(Pos,1,num);

console.log("Modificado: " + cad);