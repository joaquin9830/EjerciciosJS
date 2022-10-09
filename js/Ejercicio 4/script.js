//Ejercicios N°4 cadenas de caracteres
let nombre = "Joaquín";
let apellido = "Viñolo";
//Concatena nombre y apellido
let estudiante = nombre.concat(" ", apellido);
//Convierte en mayúscula estudiante
let estudianteMayus = estudiante.toUpperCase();
//Convierte en minuscula estudiante
let estudianteMinus = estudiante.toLowerCase();
//Cuenta la cantidad de letras de la variable estudiante
let numeroLetras = estudiante.length;
//Primera letra de nombre
let primeraLetra = nombre.charAt(0);
//Última letra de apellido
let ultimaLetra = apellido.charAt(5);
//Elimina los espacios de la variable estudiante
let eliminaEspacios = estudiante.trim();
//Contiene el nombre?
let contiene = estudiante.includes("Joaquín");

