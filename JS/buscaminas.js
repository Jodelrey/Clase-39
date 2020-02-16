//Crear un programa que dado un array 2d permita ingresar una coordenada (representando los índices del array), y mostrar si era una casilla vacía o tenía una mina. En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas. Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó. Las minas y casillas vacías (ocultas y descubiertas) pueden representarse con emojis con con números o letras.
const tablero = 
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
] 
let tableroJuego =
[
['📦', '📦', '📦'],
['📦', '📦', '📦'],
['📦', '📦', '📦']
]

// Ingrese una coordenada: 0,0
// La caja está vacía!

// 💨 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// Ingrese una coordenada: 0,1
// ¡Oh no!¡Has encontrado una bomba!

// 💨 💥 📦
// 📦 📦 📦
// 📦 📦 📦


const explosion = "💥";
const casillaVacia = "📦";
const bomba = "💣";
let continuaJugando = true;
let coordenadas = [];
let cajas = 6;
let mensaje = '';
let mostrarMensaje = function(){
    for(let i = 0; i<tableroJuego.length; i++){
        for(j = 0; j<tableroJuego[i].length; j++){            
        }
        mensaje+= tableroJuego[i][0]+ tableroJuego[i][1] + tableroJuego[i][2] + '\n';
    }
    alert(mensaje);
}


while(continuaJugando){
    mostrarMensaje();  
    mensaje = '';
    
    coordenadas.push(prompt("Ingrede dos coordenadas, entre 0 y 2, separadas por espacios").split(' '));
    
    if(tablero[coordenadas[0][0]][coordenadas[0][1]]!==bomba){
        tableroJuego[coordenadas[0][0]][coordenadas[0][1]] = '💨';                
        alert(`La caja esta vacia`);
        coordenadas = [];
        cajas--;
        if(cajas === 0){
            alert(`GANOOOOO`);
            mostrarMensaje();
            continuaJugando = false;
        }
    } 
    else{
        tableroJuego[coordenadas[0][0]][coordenadas[0][1]] = explosion;
        alert(`Oh no, has encontrado una bomba`);
        mostrarMensaje();
        continuaJugando = false;
        
    }
   
}