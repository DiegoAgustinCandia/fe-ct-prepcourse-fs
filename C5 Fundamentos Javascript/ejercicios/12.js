function tienenMismaLongitud(str1, str2) {
  // Obtener la longitud de cada cadena
  var str1 = str1.length;
  var str2 = str2.length;

  // Comparar las longitudes de las cadenas
  if (str1 === str2) {
    return true; // Tienen la misma longitud
  } else {
    return false; // No tienen la misma longitud
  }
}

// Ejemplo de uso
var str1 = "Hola";
var str2 = "Holas";
console.log(tienenMismaLongitud(str1, str2)); // Output: false

module.exports = tienenMismaLongitud;