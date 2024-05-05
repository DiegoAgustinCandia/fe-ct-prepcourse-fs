function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero <= 1) { // Los números menores o iguales a 1 no son primos
    return false;
  }

  for (let i = 2; i < numero; i++) { // Comenzamos desde 2 y recorremos hasta el número anterior a "numero"
    if (numero % i === 0) { // Si "numero" es divisible por algún número diferente de sí mismo y de 1
      return false; // No es primo
    }
  }

  return true; // Si no se encontró ningún divisor diferente de sí mismo y de 1, entonces es primo
}

module.exports = esNumeroPrimo;
