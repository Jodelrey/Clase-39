let datosUsuarios = [
	[0, "Carla", "1545628984", "carla@gmail.com"],
	[1, "Pedro", "1545251245", "pedro@gmail.com"],
	[2, "Lucas", "1523357849", "lucas@gmail.com"],
	[3, "Ana", "15789456", "ana@gmail.com"]
]

let vueltas = 4;
let usuario = [];
let continuar = true;
while (continuar) {
	const menu = prompt(`Seleccione la accion que desea realizar: \n - Crear un usuario \n - Buscar un usuario \n - Listar usuarios \n - Modificar un usuario \n - Eliminar un usuario \n - Salir`);
	switch (menu) {
		case "Crear un usuario":
			let crearUsuario = true;
			while (crearUsuario) {

				let nombre = prompt("Ingrese el nombre del nuevo usuario");
				let telefono = prompt("Ingrese el telefono del nuevo usuario, sin espacios");
				let mail = prompt("Ingrese el mail del nuevo usuario");
				let confirmarOperacion = confirm(`Los datos ingresados son: \n - Nombre: ${nombre} \n - Telefono: ${telefono} \n - Mail: ${mail} \n Desea confirmar la operacion?`);
				if (confirmarOperacion) {
					usuario.push(vueltas, nombre, telefono, mail);
					datosUsuarios.push(usuario);
					usuario = [];
					vueltas++;
					console.log(datosUsuarios);
					alert(`El usuario ${nombre} se ha ingresado correctamente a la base de datos`);
				} else {
					alert(`La operacion fue cancelada`);
				}
				crearUsuario = confirm(`Desea repetir la operacion?`);

			}
			break;
		case "Buscar un usuario":
			let buscar = true;
			while (buscar) {
				let dato = prompt(`Con que dato desea buscar al usuario: \n-ID \n-Nombre \n-Celular \n-Email`);
				if (dato === "ID") {
					id = Number(prompt("Ingrese el numero del ID"));
					if (id > datosUsuarios.length - 1) {
						alert(`No existen usuarios con el ID ${id}`);
					} else {
						alert(`Se ha encontrado al usuario \n -ID ${datosUsuarios[id][0]} \n -Nombre ${datosUsuarios[id][1]} \n -Telefono ${datosUsuarios[id][2]} \n -Mail: ${datosUsuarios[id][3]}`);
					}
				} else {
					let valor = prompt(`Ingrese el ${dato}`);
					let usuarioEncontrado = false;
					let indice = 0;
					for (let i = 0; i < datosUsuarios.length; i++) {
						for (j = 0; j < datosUsuarios[i].length; j++) {
							if (datosUsuarios[i][j] === valor) {
								indice = i;
								usuarioEncontrado = true;
							}
						}
					}
					if (usuarioEncontrado) {
						alert(`Se ha encontrado al usuario \n -ID ${datosUsuarios[indice][0]} \n -Nombre ${datosUsuarios[indice][1]} \n -Telefono ${datosUsuarios[indice][2]} \n -Mail: ${datosUsuarios[indice][3]}`);

					} else {
						alert(`No existe un usuario en la base de datos con ese valor`);
					}
				}
				buscar = confirm("Desea realizar otra busqueda?");

			}

			break;

		case "Listar usuarios":
			mensaje = `La lista de usuarios es: `;
			for (let i = 0; i < datosUsuarios.length; i++) {
				for (let j = 0; j < datosUsuarios[i].length; j++) {

				}
				mensaje += `\n ID: ${datosUsuarios[i][0]} Nombre: ${datosUsuarios[i][1]} Telefono:${datosUsuarios[i][2]} Mail: ${datosUsuarios[i][3]}`
			}
			alert(mensaje);
			break;

		case "Modificar un usuario":
			let continuarModificando = true;
			while (continuarModificando) {
				idAModificar = Number(prompt("Ingrese el ID del usuario que desea modificar"));
				if (idAModificar > datosUsuarios.length - 1) {
					alert(`No existe un usuario con el ID ${idAModificar}`);
				} else {
					let nuevoNombre = prompt("Ingrese el nuevo nombre del usuario");
					let nuevoTelefono = prompt("Ingrese el nuevo telefono del usuario");
					let nuevoEmail = prompt("Ingrese el nuevo Mail del usuario");
					confirmaModificacion = confirm(`Los nuevos datos para el ID ${idAModificar} son: \n Nombre: ${nuevoNombre} \n Telefono: ${nuevoTelefono} \n Email: ${nuevoEmail} \n Confirma el cambio?`)
					if (confirmaModificacion) {
						datosUsuarios[idAModificar][1] = nuevoNombre;
						datosUsuarios[idAModificar][2] = nuevoTelefono;
						datosUsuarios[idAModificar][3] = nuevoEmail;
					} else {
						alert(`La operacion ha sido cancelada`);
					}
				}
				continuarModificando = confirm(`Desea repetir la operacion?`);
			}
			break;
		case "Eliminar un usuario":
			let continuarEliminando = true;
			while (continuarEliminando) {
				idAEliminar = Number(prompt(`Ingrese el ID del usuario que desea eliminar`));
				if (idAEliminar > datosUsuarios.length - 1) {
					alert(`No existe un usuario con el ID ${idAModificar}`)
					continuarEliminando = confirm("Desea eliminar otro usuario?");
				} else {
					confirmaEliminar = confirm(`Los datos del usuario que desea eliminar son: \n -ID: ${idAEliminar} \n -Nombre: ${datosUsuarios[idAEliminar][1]} \n -Telefono: ${datosUsuarios[idAEliminar][2]} \n-Email: ${datosUsuarios[idAEliminar][3]} \n Confirma la eliminacion?`);
					if (confirmaEliminar) {
						datosUsuarios.splice(idAEliminar - 1, 1);

					} else {
						alert(`Ha abortado la operacion`);
					}
					continuarEliminando = confirm("Desea eliminar otro usuario?");
				}
			}

			break;
		case "Salir":

			continuar = false;
			alert("BYE BYE");
			break;
	}

}