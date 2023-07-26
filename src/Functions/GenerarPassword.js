const GenerarPassword = (configuracion) => {
	//Agregamos todos los caracteres que se puedan generar aleatoriamente en el password
	const caracteres = {
		numeros: '0 1 2 3 4 5 6 7 8 9',
		simbolos: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
	}
	
	let caracteresFinales = '';
	let password = '';									//aqui gaurdaremos nuestra contraseña final

	for(let propiedad in configuracion){
		if(configuracion[propiedad] === true){
			caracteresFinales += caracteres[propiedad] + ' ';
		}
	}

	caracteresFinales += caracteres.minusculas;			// llamamos a las minusculas porque se declaran por defecto
	caracteresFinales = caracteresFinales.trim();		//.trim elimina espacios al inicio y al final
	
	caracteresFinales = caracteresFinales.split(' ');	//.split separa cada uno de los elementos y los convierte a un arreglo

	for(let i = 0; i < configuracion.numeroDeCaracteres; i++){
		password += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];	//generamos la contraseña
	}

	return password;
}

export default GenerarPassword;