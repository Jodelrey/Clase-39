//Crear un programa que permita ingresar 9 números separados por espacios, y los distribuya en una grilla de 3x3. El programa debe decir si hay algún número que se repite en una fila, columna, o diagonal. Ejemplo
[
	[2, 7, 12],
	[8, 23, 1],
	[9, 45, 7]
] // ✅

[
	[2, 7, 12],
	[8, 23, 1],
	[23, 45, 7]
] // 🚫

let numeros = prompt("Ingrese nueve numeros separados por espacios").split(' ');
const array1 = numeros.splice(0, 3);

const array2 = numeros.splice(0, 3);

const arrayTotal = [];
arrayTotal.push(array1, array2, numeros);

if (arrayTotal[0][0] !== arrayTotal[0][1] && arrayTotal[0][0] !== arrayTotal[0][2] && arrayTotal[0][1] !== arrayTotal[0][2] &&
	arrayTotal[1][0] !== arrayTotal[1][1] && arrayTotal[1][0] !== arrayTotal[1][2] && arrayTotal[1][1] !== arrayTotal[1][2] &&
	arrayTotal[2][0] !== arrayTotal[2][1] && arrayTotal[2][0] !== arrayTotal[2][2] && arrayTotal[2][1] !== arrayTotal[2][2] &&
	arrayTotal[0][0] !== arrayTotal[1][0] && arrayTotal[0][0] !== arrayTotal[2][0] && arrayTotal[1][0] !== arrayTotal[2][0] &&
	arrayTotal[0][1] !== arrayTotal[1][1] && arrayTotal[0][1] !== arrayTotal[2][1] && arrayTotal[1][1] !== arrayTotal[2][1] &&
	arrayTotal[0][2] !== arrayTotal[1][2] && arrayTotal[0][2] !== arrayTotal[2][2] && arrayTotal[1][2] !== arrayTotal[2][2] &&
	arrayTotal[0][0] !== arrayTotal[1][1] && arrayTotal[1][1] !== arrayTotal[2][2] && arrayTotal[0][0] !== arrayTotal[2][2] &&
	arrayTotal[0][2] !== arrayTotal[1][1] && arrayTotal[1][1] !== arrayTotal[2][0] && arrayTotal[0][2] !== arrayTotal[2][2]) {

	alert("✅")

} else {

	alert('🚫');

}