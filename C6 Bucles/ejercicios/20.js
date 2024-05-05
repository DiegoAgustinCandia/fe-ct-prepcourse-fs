function sumarHastaNConBreak(n) {
   // La función recibe un número n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:

   let suma = 0; // Inicializa la variable suma para acumular la suma de los números

   for (let i = 1; i <= n; i++) {
      suma += i; // Suma el valor de i a la suma actual

      if (suma > 100) { // Verifica si la suma supera 100
         break; // Detiene el bucle si la suma supera 100
      }
   }

   return suma; // Devuelve la suma acumulada
}

module.exports = sumarHastaNConBreak;
