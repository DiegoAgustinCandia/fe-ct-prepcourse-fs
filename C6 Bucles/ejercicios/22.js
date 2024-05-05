function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let veces = 0; // Inicializamos una variable para contar las veces que hemos incrementado num

  do {
    num += 5; // Aumentamos num en 5 en cada iteración
    veces++; // Incrementamos el contador de veces
  } while (veces < 8); // Repetimos el bucle mientras no hayamos llegado a 8 veces

  return num; // Devolvemos el valor final de num
}

module.exports = doWhile;
