let cad=['1','2','3']; 

let pos=parseFloat(prompt("Elige la posicion para eliminar un numero \n" + "Números: " + vec));

console.log("Original: " + cad);

cad.splice(pos,1);

console.log("Modificado: " + cad);
