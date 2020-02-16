const array2D = 
[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]

]

const comestibles = 
[
    ["FRUTAS","manzana", "pera", "banana"],
    ["VERDURAS","choclo", "brocoli", "lechuga"],
    ["LEGUMBRES", "garbanzos", "lentejas", "porotos"]

]
//para acceder a lechuga
comestibles[1][2];

//Para pushear
comestibles[1].push("cebolla");
let mensaje = '';
//Para recorrer todos los elementos de un array multidimensional
for(let i = 0; i<comestibles.length; i++){
    mensaje += comestibles[i][0] + '\n' +'--------' + '\n' 
    for(let j = 1; j<comestibles[i].length; j++){
        console.log(comestibles[i][j]);
        mensaje += comestibles[i][j] + '\n';
    }
    mensaje +='---------' + '\n'
}

alert(mensaje);