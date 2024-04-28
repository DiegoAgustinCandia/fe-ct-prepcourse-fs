function esVocal(letra) {
  // Convierte la letra a mayúscula
  letra = letra.toUpperCase();

  // Verifica si la letra es una vocal
  if (letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
    return "Es vocal"; // Retorna "Es vocal" si es una vocal
  } else {
    return "Dato incorrecto"; // Retorna "Dato incorrecto" si no es una vocal
  }
}

console.log(esVocal("yu"));


module.exports = esVocal;
