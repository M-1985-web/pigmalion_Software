# Suma de 2 elementos de un array formando un número X. 🚀

# Maldonado Martin 🚀

## Caracteristicas generales 🚀

* Por un lado, crear un algoritmo para resolver el problema se planteó dos escenarios posibles:
Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más importante es realizar el desarrollo en el menor tiempo posible:
Si los recursos son infinitos y el tiempo de ejecución no importa, se podría utilizar un enfoque de fuerza bruta como una posible solución para resolver el problema. El algoritmo consiste en probar todas las posibles combinaciones de pares de elementos del array y verificar si su suma es igual a X. Este algoritmo tiene una complejidad de tiempo cuadrática O(n^2), lo que significa que puede volverse ineficiente para arrays grandes.

![Prueba encontrarSuma = Verdadera]()

![Prueba encontrarSuma = Falsa]()


*  Y por otro, Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado, que el tiempo de ejecución sí importa y que el tiempo de desarrollo no es importante.
En este segundo escenario se podría utilizar un enfoque basado en un conjunto (Set) para almacenar los complementos necesarios para formar X y evitar la necesidad de comprobar todas las combinaciones posibles de pares de elementos. El algoritmo recorre el array una vez. Para cada elemento, calcula el complemento necesario para formar X. Tiene una complejidad de tiempo de O(n), donde n es el tamaño del array, ya que recorre el array una sola vez.


![Prueba encontrarSumaOptimizada = Verdadera]("")

![Prueba encontrarSumaOptimizada = Falsa]("")


# Ide 🚀

### Visual Studio Code v.1.56.0

# Lenguaje que utilizó en la construcción del ejercicio 🚀

### JavaScript

# Ambiente de prueba 🚀

### Node.Js v.16.13.2

#### Comandos 🚀
#### Dentro del proyecto, abrir CDM, y ejecutar:
#### Node encontrarSuma.js
#### Node encontrarSumaOptimizada.js