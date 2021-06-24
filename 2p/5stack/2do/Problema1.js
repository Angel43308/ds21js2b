var menu;

do{
menu=parseInt(prompt("PILA \n Ingresa un valor para realizar la accion correspondiente \n 1.Agregar \n 2.Eliminar \n 3.Vaciar \n 4.Salir"));

var v;
if(menu===1)

v=prompt("Ingresa un valor");
var i=["1","2","3"],aux;

    if(i=="" && menu!=1){
	    document.write("La pila se encuentra vacia");
        }
    else{
    switch(menu){

        case 1:
            i.push(v);
            alert(i);
        break;
        case 2:
            i.pop();
            alert(i);
        break;
        case 3:
            aux=i.length;
            i.splice(0,aux);
            alert("La pila esta vacia");
        break;
            }
        }
    }
while((menu<4))
