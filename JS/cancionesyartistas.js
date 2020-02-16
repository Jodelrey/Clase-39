//Crear un programa con las siguientes posibles acciones. Una vez realizada la acción, debe volver al menú de opciones para elegir una nueva.
// AGREGAR CANCION: debe permitir ingresar el nombre de una canción y le artista, separado por coma, por ejemplo: Africa, Toto
// BUSCAR CANCIONES: debe permitir ingresar el nombre de une artiste y mostrar una lista con todas sus canciones que (hay ingresadas)
// LISTAR ARTISTAS: debe mostrar una lista con todes les artistes (solo los nombres)
// SALIR: debe terminar la ejecución del programa

let listas = [];
let continuar = true;
let mensaje = ' ';

while(continuar){
    let accion = prompt("Que accion desea realizar: Agregar cancion, Buscar canciones, Listar artistas o Salir");
    switch(accion){
        case "Agregar cancion":
            agregarCancion = prompt("Ingrese nombre de cancion y artista, separados por coma").split(',');
            for(i = 0; i<listas.length; i++){
                for(j = 0; j<listas[i].length; j++){
                    if(agregarCancion[1]===listas[i][0]){
                        listas[i].push(agregarCancion[0]);
                    } else {
                        listas.push([agregarCancion[1], agregarCancion[0]]);
                    }
                }
            }
            break;
        case "Buscar canciones":
            artista = prompt("Ingrese el nombre del artista sobre el cual desea obtener el listado de canciones");
            for(i=0; i<listas.length; i++){
                if(listas[i][0]===artista){
                    mensaje += artista + "\n";
                    index = i;
                }
                for(j=1; j<listas[index].length; j++){
                    mensaje+= listas[index][j] + "\n";
                }
         
            }
                
        alert(mensaje);
    
    break;
    case "Listar artistas":
        artistas = " ";
        for(i=0; i<listas.length; i++){
            for(j=0; j<listas[i].length; j++){
                artistas+=listas[i][0] + '\n';


            }
        }
        alert(artistas);
        break;
    case "Salir":
        continuar = false;
    }
}