function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let start = 1;
  let end = n;
  let suma = 0; // Inicializa la suma en 0

  for (let i = start; i <= end; i++) {
    suma += i; // Suma cada número a la suma acumulada
  }

  return suma; // Devuelve la suma acumulada al finalizar el bucle
}

module.exports = sumarHastaN;
