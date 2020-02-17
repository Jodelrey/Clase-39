//Mayor número

// Crear un programa que dado un array 2d de números, indique cuál es el mayor de ellos. El array debe estar guardado en una variable (no hace falta ingresarlo). Array de ejemplo:
const numeros = [
	[2, 7, 12, 1],
	[8, 23],
	[9, 45, 7],
	[22, 3, 24, 4]
];
let numeroMayor = 0;
for (let i = 0; i < numeros.length; i++) {
	for (j = 0; j < numeros[i].length; j++) {
		if (numeros[i][j] > numeroMayor) {
			numeroMayor = numeros[i][j];
		}
	}
}
console.log(numeroMayor);