/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arreglo = [];
  for (var propiedad in objeto) {
    var valor = objeto[propiedad];
    arreglo.push([propiedad, valor]);
  }
  return arreglo;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var result = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  var orderedResult = {};
  var keys = Object.keys(result);
  keys.sort();
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    orderedResult[key] = result[key];
  }
  return orderedResult;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var upper = "";
  var lower = "";
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter === letter.toUpperCase()) {
      upper += letter;
    } else {
      lower += letter;
    }
  }
  return upper + lower;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  // Dividimos la frase en palabras utilizando el espacio como separador
  const palabras = frase.split(" ");

  // Invertimos el orden de las letras de cada palabra
  const palabrasInvertidas = palabras.map((palabra) =>
    palabra.split("").reverse().join("")
  );

  // Unimos las palabras invertidas en un nuevo string utilizando un espacio como separador
  const fraseInvertida = palabrasInvertidas.join(" ");

  // Retornamos la frase invertida
  return fraseInvertida;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroStr = numero.toString(); // Convertimos el número a una cadena
  let numeroInvertidoStr = numeroStr.split("").reverse().join(""); // Invertimos la cadena
  if (numeroStr === numeroInvertidoStr) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (char !== "a" && char !== "b" && char !== "c") {
      newString += char;
    }
  }
  return newString;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort(function (a, b) {
    return a.length - b.length;
  });
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var interseccion = [];

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j] && interseccion.indexOf(array1[i]) === -1) {
        interseccion.push(array1[i]);
      }
    }
  }

  return interseccion;
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
