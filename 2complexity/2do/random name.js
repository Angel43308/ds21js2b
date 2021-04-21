function Aleatorios(){
   var inicio=65;
   var fin=90; 
   var n = Math.random();
    
    n = inicio + n * (fin - inicio + 1);
    n = Math.floor(n);
   var letra = String.fromCharCode(n);
    
   return letra;
  }
   
  for(let i = 0; i < 5; i++){
    document.write(Aleatorios());
  }