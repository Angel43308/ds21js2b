//genera una letra aleatoria en un rango de 'A' - 'Z'
function letrA(){
 	 var inicio = 65;
   var fin = 90; 
   var n = Math.random();
		n = inicio + n * (fin - inicio +1);
    n = Math.floor(n);
   var letra = String.fromCharCode(n);
   return letra;}
  
  let nombres=[];//genera el array donde se guardaran el conjunto de letras en un mismo punto

   for(let i = 0; i < 10; i++){//ciclo que generara la cantidad de nombres
    nombres.push(letrA()+letrA()+letrA()+letrA());//forma una palabra juntando 4 letras aleatorias generadas por la funcion
  }
  
  var n = nombres.length;
  var aux;
  //ordenamos los nombres de acuerdo a la primera vocal con la que inicie
   for (let x = 1; x < n; x++) {
    for (y = 0; y < (n - x); y++) {
     if (nombres[y] > nombres[y + 1]) {
      aux = nombres[y];
      nombres[y] = nombres[y + 1];
      nombres[y + 1] = aux;}}}
 
console.log(nombres);//imprime en consola los nombres guardados