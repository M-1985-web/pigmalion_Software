/** enfoque basado en un conjunto (Set)  */
function encontrarSuma(array, X) {
    const complements = new Set();
    for (let i = 0; i < array.length; i++) {
        const complement = X - array[i];

        if (complements.has(complement)) {
            return true;
        }

        complements.add(array[i]);
    }

    return false;
}

const array = [10, 20, 40, 50, 80];
const X = 30;

if (encontrarSuma(array, X)) {
    console.log("Sí, es posible formar el número X usando la suma de 2 elementos en el array.");
} else {
    console.log("No es posible formar el número X usando la suma de 2 elementos en el array.");
}

/**Utilice (Set) para almacenar los complementos necesarios 
para formar X */
/** evita la necesidad de comprobar todas las combinaciones posibles */
/**calcula el complemento necesario para formar X  */
/**Recorre, verifica y si encontró una combinación de 2
elementos cuya suma es X, se devuelve verdadero. Sino el
bucle retorna falso */
/**tiene una complejidad de tiempo de O(n), donde n es el tamaño del array, ya que recorre el array una sola vez.  */