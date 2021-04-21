 let d = ["Angel","Armando","Rojas","Herrera"];
let k = "Armando";
let i = 0;
  for (i = 0; i<=d.length; i++){
  if (k==d[i])
  console.log(k+" en Posicion: "+i);
    
    else if ((i==d.length)&&(d[i]!=k))
  console.log("-1");}