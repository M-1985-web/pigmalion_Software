# Suma de 2 elementos de un array formando un número X. 🚀

# Maldonado Martin 🚀

## Caracteristicas generales 🚀

* Dada la siguiente problemática: ¿puede un número X formarse 
usando la suma de 2 elementos de un array?. Debemos crear un Programa para resolver un problema que se planteó en dos escenarios posibles.

Por un lado, asumiendo que la máquina en donde va a correrse el programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más importante es realizar el desarrollo en el menor tiempo posible.
Si los recursos son infinitos y el tiempo de ejecución no importa, se podría utilizar un enfoque de fuerza bruta como una posible solución para resolver el problema. El algoritmo consiste en probar todas las posibles combinaciones de pares de elementos del array y verificar si su suma es igual a X. Pero utilizando esta solucion encontramos una complejidad de tiempo cuadrática O(n^2), lo que significa que puede volverse ineficiente para arrays grandes y el mismo ejecutaria cada una de todas las posibles combinaciones.

![Prueba encontrarSuma = Verdadera](https://github.com/M-1985-web/pigmalion_Software/blob/master/imagenes/encontrarSumaVerdadera.jpg)

![Prueba encontrarSuma = Falsa](https://github.com/M-1985-web/pigmalion_Software/blob/master/imagenes/encontrarSumaFalso.jpg)


* Y por otro, Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado, que el tiempo de ejecución sí importa y que el tiempo de desarrollo no es importante.
En este segundo escenario se podría utilizar un enfoque basado en un conjunto (Set) para almacenar los complementos necesarios para formar X como una solución y evitar la necesidad de comprobar todas las combinaciones posibles de pares de elementos. El algoritmo recorre el array una vez. Para cada elemento, calcula el complemento necesario para formar X. Tiene una complejidad de tiempo de O(n), donde n es el tamaño del array, ya que recorre el array una sola vez.


![Prueba encontrarSumaOptimizada = Verdadera](https://github.com/M-1985-web/pigmalion_Software/blob/master/imagenes/encontrarSumaOptimizadaVerdadera.jpg)

![Prueba encontrarSumaOptimizada = Falsa](https://github.com/M-1985-web/pigmalion_Software/blob/master/imagenes/encontrarSumaOptimizadaFalso.jpg)


# Ide 🚀

### Visual Studio Code v.1.56.0

# Lenguaje que se utilizó en la construcción del ejercicio 🚀

### JavaScript

# Ambiente de prueba 🚀

### Node.Js v.16.13.2

#### Comandos 🚀
#### Dentro del proyecto, abrir CDM, y ejecutar:
#### Node encontrarSuma.js
#### Node encontrarSumaOptimizada.js