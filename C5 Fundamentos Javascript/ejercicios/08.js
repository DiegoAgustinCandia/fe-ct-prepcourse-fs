function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:

  // Verifica si el valor proporcionado es un número y si es un entero sin decimales
  if (Number.isInteger(numero)) {

    return true; // Si no es de tipo number, retorna false
  } else {
    return false;
  }


  // Utilizamos la función Math.floor para redondear hacia abajo y verificar si el número es igual a sí mismo

}

module.exports = esNumeroEntero;
