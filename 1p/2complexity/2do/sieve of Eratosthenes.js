let num= parseInt(prompt("Ingresa un numero"));         
  let i,j;
  let numeroPrimo=[num];

  for(let i=0;i<num;i++){
    numeroPrimo[i]=true;
  }
  
  for(i=2;i<num;i++){
   for(j=2;i*j<num;j++){
     numeroPrimo[i*j]=false;
   }
  }
  for(i=2;i<num;i++){
    if(numeroPrimo[i])
      console.log(i + "<br>");
  }