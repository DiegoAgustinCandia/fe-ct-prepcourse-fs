function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  let product = 1; // Inicializa el producto en 1, ya que cualquier número multiplicado por 1 es igual a sí mismo

  for (let i = start; i <= end; i++) {
    product *= i; // Multiplica cada número por el producto acumulado
  }

  return product; // Devuelve el producto acumulado al finalizar el bucle
}

module.exports = productoEntreNúmeros;







