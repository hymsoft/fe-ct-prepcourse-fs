/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const resultado = [];
  for (const propiedad in objeto) {
    resultado.push([propiedad, objeto[propiedad]]);
  }
  return resultado;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let objeto = {}; //Creo el objeto que voy a devolver
  string
    .split("") //Convierto el string en un array
    .sort() //Ordeno el array
    .forEach((caracter) => {
      //Recorro cada elemento
      if (objeto[caracter]) {
        //Si exite el valor en el objeto
        objeto[caracter]++; //Le sumo 1
      } else {
        objeto[caracter] = 1; //Sino lo agrego con el valor 1
      }
    });
  return objeto; //devuelvo el objeto
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayusculas = "";
  let minusculas = "";
  //transformo el string y lo convierto en array para recorrerlo
  string.split("").forEach((caracter) => {
    //Uso un operador ternario para comparar el caracter actual con su mayuscula
    caracter === caracter.toUpperCase()
      ? //si son iguales lo agrego al string de mayusculas
        (mayusculas += caracter)
      : //sino lo agrego al string de minusculas
        (minusculas += caracter);
  });
  //Devuelvo la concatenacion de los dos string
  return mayusculas + minusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let arrayDePalabras = frase.split(" "); //Convierto la frase en un string de palabras
  let arrayDePalabrasInvertidas = [];
  arrayDePalabras.forEach(
    (
      palabra //Recorro el array de palabras y por cada palabra
    ) => arrayDePalabrasInvertidas.push(palabra.split("").reverse().join("")) //Agrego esa palabra pero en el orden inverso
  );
  return arrayDePalabrasInvertidas.join(" "); // retorno el nuevo array de palabras, pero en forma de string
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroInvertido = parseInt(
    numero.toString().split("").reverse().join("")
  );
  if (numeroInvertido === numero) return "Es capicua";
  return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let split = string.split("");
  let join = split
    .filter(
      (val) =>
        val.toUpperCase() !== "A" &&
        val.toUpperCase() !== "B" &&
        val.toUpperCase() !== "C"
    )
    .join("");
  return join;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  return array1.filter((e) => array2.includes(e));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
