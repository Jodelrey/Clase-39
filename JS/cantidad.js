//Crear un programa que dado un array 2d de strings, indique cuál es la cantidad de una de sus ítems. El programa debe dar la posibilidad de ingresar qué item se desea buscar. Ejemplo:
const frutas = [
	['🍎', '🍏', '🍌', '🍌'],
	['🍌', '🍎'],
	['🍎', '🍏', '🍌'],
	['🍏', '🍌', '🍎', '🍌']
];

let frutaABuscar = prompt("Ingrese que fruta desea buscar");
const manzana = '🍎';
const pera = '🍏';
const banana = '🍌';
let suma = 0;

if (frutaABuscar === "manzana") {
	frutaABuscar = manzana;
} else if (frutaABuscar === "pera") {
	frutaABuscar = pera;
} else {
	frutaABuscar = banana;
}

for (let i = 0; i < frutas.length; i++) {
	for (let j = 0; j < frutas[i].length; j++) {
		if (frutas[i][j] === frutaABuscar) {
			suma++;
		}
	}
}
alert(`Cantidad de ${frutaABuscar}: ${suma}`);