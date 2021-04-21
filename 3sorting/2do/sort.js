let numeros=[];
  
  function aleatorios(n){
        let inicio = 1;
      	let fin = 100;
				n = Math.random();
 				n = inicio + n * (fin - inicio + 1);
 			 return n = Math.floor(n);
    }
  
  for(let i = 0; i < 10; i++){
     numeros.push(aleatorios()); 
  }
  //ordenarlos

  numeros.sort(function(a,b){return a - b;});
  document.write(numeros+" ");