//Crear un programa que permita controlar una viborita.
// El programa debe mostrar el tablero en todo momento.
// Debe permitir ingresar las direcciones para donde desea mover la víbora: ARRIBA, DERECHA, ABAJO, IZQUIERDA, y moverla en consecuencia.
// El objetivo es comer todas las manzanas, el juego termina cuando no hay más manzanas.
// Para comer una manzana, debe moverse hacia ella.
// Si la vibora llega esta en el borde del tablero, y se mueve hacia este, debe aparecer del otro lado del mismo.
// Si se intenta avanzar a un casillero bloqueado (en el ejemplo, un ladrillo) no debe poder avanzar.
// En vez de emojis se pueden usar letras.
const tablero = [
	['🌱', '🌱', '🍎', '🌱', '🌱'],
	['🍎', '🧱', '🌱', '🧱', '🍎'],
	['🌱', '🧱', '🐍', '🌱', '🌱'],
	['🌱', '🍎', '🌱', '🧱', '🌱'],
	['🍎', '🌱', '🌱', '🍎', '🧱'],
	['🌱', '🌱', '🌱', '🌱', '🍎'],
]
let mensaje = '';
let manzanas = 7;
let manzana = '🍎';
let ladrillo = '🧱';
let viborita = '🐍';
let planta = '🌱';

let mostrarMensaje = function () {
	for (let i = 0; i < tablero.length; i++) {
		for (j = 0; j < tablero[i].length; j++) {}
		mensaje += tablero[i][0] + tablero[i][1] + tablero[i][2] + tablero[i][3] + tablero[i][4] + '\n';
	}
	alert(mensaje);
}
let mensajeLadrillo = function () {
	alert(`No puede realizar ese movimiento, se va a dar la cabeza contra ${ladrillo}`);
}
let viboritaI = 0;
let viboritaJ = 0;

let continuar = true;
while (continuar) {
	mostrarMensaje();
	mensaje = '';
	for (let i = 0; i < tablero.length; i++) {
		for (let j = 0; j < tablero[i].length; j++) {
			if (tablero[i][j] === viborita) {
				viboritaI = i;
				viboritaJ = j;
			}
		}
	}
	movimiento = prompt("Ingrese un movimiento para acercarse a una manzana: ARRIBA, DERECHA, ABAJO o IZQUIERDA");
	switch (movimiento) {
		case "ARRIBA":
			if (viboritaI === 0 && tablero[5][viboritaJ] !== ladrillo) {
				tablero[0][viboritaJ] = tablero[5][viboritaJ];
				tablero[5][viboritaJ] = viborita;
			} else if (viboritaI === 0 && tablero[5][viboritaJ] === ladrillo) {
				mensajeLadrillo();
			} else if (tablero[viboritaI - 1][viboritaJ] === manzana) {
				manzanas--;
				tablero[viboritaI][viboritaJ] = '💩';
				tablero[viboritaI - 1][viboritaJ] = viborita;
			} else if (tablero[viboritaI - 1][viboritaJ] !== ladrillo) {
				tablero[viboritaI][viboritaJ] = tablero[viboritaI - 1][viboritaJ];
				tablero[viboritaI - 1][viboritaJ] = viborita;
			} else if (tablero[viboritaI - 1][viboritaJ] === ladrillo) {
				mensajeLadrillo();
			}


			break;
		case "DERECHA":
			if (viboritaJ === 4 && tablero[viboritaI][0] !== ladrillo) {
				tablero[viboritaI][4] = tablero[viboritaI][0];
				tablero[viboritaI][0] = viborita;
			} else if (viboritaJ === 4 && tablero[viboritaI][0] === ladrillo) {
				mensajeLadrillo();
			} else if (tablero[viboritaI][viboritaJ + 1] === manzana) {
				manzanas--;
				tablero[viboritaI][viboritaJ] = '💩';
				tablero[viboritaI][viboritaJ + 1] = viborita;
			} else if (tablero[viboritaI][viboritaJ + 1] !== ladrillo) {
				tablero[viboritaI][viboritaJ] = tablero[viboritaI][viboritaJ + 1];
				tablero[viboritaI][viboritaJ + 1] = viborita;
			} else if (tablero[viboritaI][viboritaJ + 1] === ladrillo) {
				mensajeLadrillo();
			}


			break;
		case "ABAJO":

			if (viboritaI === 5 && tablero[0][viboritaJ] !== ladrillo) {
				tablero[5][viboritaJ] = tablero[0][viboritaJ];
				tablero[0][viboritaJ] = viborita;
			} else if (viboritaI === 5 && tablero[0][viboritaJ] === ladrillo) {
				mensajeLadrillo();
			} else if (tablero[viboritaI + 1][viboritaJ] === manzana) {
				manzanas--;
				tablero[viboritaI][viboritaJ] = '💩';
				tablero[viboritaI + 1][viboritaJ] = viborita;
			} else if (tablero[viboritaI + 1][viboritaJ] !== ladrillo) {
				tablero[viboritaI][viboritaJ] = tablero[viboritaI + 1][viboritaJ];
				tablero[viboritaI + 1][viboritaJ] = viborita;
			} else if (tablero[viboritaI + 1][viboritaJ] === ladrillo) {
				mensajeLadrillo();
			}

			break;
		case "IZQUIERDA":

			if (viboritaJ === 0 && tablero[viboritaI][4] !== ladrillo) {
				tablero[viboritaI][0] = tablero[viboritaI][4];
				tablero[viboritaI][4] = viborita;
			} else if (viboritaJ === 0 && tablero[viboritaI][4] !== ladrillo) {
				mensajeLadrillo();
			} else if (tablero[viboritaI][viboritaJ - 1] === manzana) {
				manzanas--;
				tablero[viboritaI][viboritaJ] = '💩';
				tablero[viboritaI][viboritaJ - 1] = viborita;
			} else if (tablero[viboritaI][viboritaJ - 1] !== ladrillo) {
				tablero[viboritaI][viboritaJ] = tablero[viboritaI][viboritaJ - 1];
				tablero[viboritaI][viboritaJ - 1] = viborita;
			} else if (tablero[viboritaI][viboritaJ - 1] === ladrillo) {
				mensajeLadrillo();
			}


			break;

		default:
			alert("No ha ingresado un movimiento valido");


	}
	if (manzanas === 0) {
		continuar = false;
		alert("GANOOOOOOOOOO");
		mostrarMensaje();
	}
}