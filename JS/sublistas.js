//Sublistas

// Crear un programa que permita agregar listas de tareas y agruparlas en categorias. El programa debe hacer lo siguiente:
// Permitir ingresar el nombre de una categoría
// Permitir ingresar una tarea
// Preguntar si desea ingresar otra tarea
// Si responde que si, volver al punto 2
// Si responde que no, preguntar si desea ingresar otra categoría
// Si responde que sí, volver al punto 1
// Si responde que no, terminar el programa En todo momento (en cada mensaje), el programa debe mostrar las tareas agrupadas por categorías. Las categorías deben diferenciarse de las tareas (se pueden usar divisores, emojis, espacios, etc). Ejemplo:
// Lista de Tareas

// SUPERMERCADO
// ----------------------
// 👉 Comprar harina
// 👉 Comprar gaseosa
// 👉 Comprar aceite

// FACULTAD
// ----------------------
// 👉 Sacar apuntes
// 👉 Anotarse para final

// MICHI
// ----------------------
// 👉 Comprar comida
// 👉 Llevar a veterinaria 

let listas = [];
let mensaje = '';
let continuar = true;
let vueltas = 0;

let mostrarMensaje = function(){

for(let i = 0; i<listas.length; i++){
    mensaje += listas[i][0] + '\n' +'--------' + '\n' 
    for(let j = 1; j<listas[i].length; j++){
        mensaje += listas[i][j]+ "\n";
    }
    mensaje += '\n'
}
alert(mensaje);
}

while(continuar){
    listas[vueltas] = prompt("Ingrese el nombre de una categoria").split(' ');
    listas[vueltas].push('👉' + ' ' + prompt("Ingrese una tarea a la lista"));
    agregarTarea = true;
    while(agregarTarea){
        agregarOtraTarea = confirm("Desea agregar otra tarea a la lista?");
        if(agregarOtraTarea){
            listas[vueltas].push('👉' + ' ' + prompt("Ingrese otra tarea a la lista"));
        } else{
            agregarTarea = false;
        }
    }
    vueltas++;
    agregarCategoria = confirm("Desea agregar otra categoria?");
    if(agregarCategoria){
        continuar = true;
    } else{
        continuar = false;
    }
}

mostrarMensaje();