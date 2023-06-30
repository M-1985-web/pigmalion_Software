/**enfoque de fuerza bruta  */
function encontrarSuma(array, X) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === X) {
                return true;
            }
        }
    }
    return false;
}

const array = [1, 3, 5, 7, 9];
const X = 7;

if (encontrarSuma(array, X)) {
    console.log("Sí, es posible formar el número X usando la suma de 2 elementos en el array.");
} else {
    console.log("No es posible formar el número X usando la suma de 2 elementos en el array.");
}

/** El Algoritmo prueba todas las posibles combinaciones de pares de elementos del array y verifica si su suma es igual a X */
/** puede volverse ineficiente para arrays grandes.*/