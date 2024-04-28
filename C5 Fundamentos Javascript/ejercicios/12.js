function tienenMismaLongitud(str1, str2) {
  // Obtener la longitud de cada cadena
  let longitudStr1 = str1.length;
  let longitudStr2 = str2.length;

  // Comparar las longitudes de las cadenas
  if (longitudStr1 === longitudStr2) {
    return true; // Tienen la misma longitud
  } else {
    return false; // No tienen la misma longitud
  }
}

module.exports = tienenMismaLongitud;
