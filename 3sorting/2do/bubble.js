//generacion de numeros aleatorios
 function numerosaleatorios()
  {
    let n=Math.random()*100;
    return Math.floor(1+n);
  }
//llama la funcion y guarda los numeros aleatorios
var a=[];
for (x=0;x<10;x++)
{
    let nam=numerosaleatorios();
    a[x]=nam;
    
}
//ordenamiento
console.log("Numeros aleatorios: " + a);//muestra desordenada
    for (k=1; k < a.length; k++) {
        for (i=0; i<(a.length-k);i++){
            if (a[i]> a [i+1]){
                aux= a[i];
                a[i]=a[i+1];
                a[i+1]=aux;
            }
        }
    }
    console.log("De manera ordenada: " + a);//muestra ordenada
