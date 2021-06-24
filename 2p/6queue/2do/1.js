var menu;	

do{
menu=parseInt(prompt("PILA \n Ingresa un valor para realizar la accion correspondiente \n 1.Agregar \n 2.Eliminar \n 3.Vaciar \n 4.Salir"));

var v;
if(menu===1)

v=prompt("Ingresa un valor");
var i=[],aux;

    if(i=="" && menu!=1){
	    document.write("La cola esta vacia");
        }
    else{
    switch(menu){

        case 1:
            i.push(v);
            alert(i);
        break;
        case 2:
            i.splice(0,1);
            alert(i);
        break;
        case 3:
            aux=i.length;
            i.splice(0,aux);
            alert("La cola esta vacia");
        break;
            }
        }
}while((menu<4))
