# Maze_Solving

ENG:

This is how the code works:

1. Several variables and arrays are defined to store relevant information, such as wall cells (`arrWalls`), road cells (`arrRoads`), current cell (`actualCell`), target cell (`meta`), and other items related to preference calculation.

2. The `start()` function is called to start the preference calculation process.

3. The `preferenceCalc()` function is called from `start()`. This function is responsible for calling the `setCells()` and `setPreference()` functions.

4. The `checkGoalStart()` function checks if there is a start point and a target in the map. The map is traversed and the number of cells of type `current` and `target` are counted. If the count is not equal to 2, an error message is displayed.

5. The `setCells()` function is responsible for initializing the `arrWalls` and `arrRoads` arrays, and assigning values to the `actualCell` and `target` variables. It also adds the target cell (`meta`) to the `arrRoadsAct` array.

6. The `setPreference()` function is called from `preferenceCalc()`. This function calls `setCells()` and then starts a time interval (`intervalCalc`) that executes the `calcPref()` function every 50 milliseconds.

7. The `calcPref()` function is the core of the preference calculation. It scrolls through the current cells in the `arrFramesAct` array and examines their adjacent cells (top, bottom, left and right). If an adjacent cell is a road (`arrRoads`) and does not yet have a priority assigned (`prio`), it is assigned a priority based on the closeness counter (`closenessCounter`). It also updates the visual representation if the `displayWeight` option is enabled.

8. After traversing all current cells and assigning priorities to adjacent cells, the `arrBoxAct` array is updated with the adjacent cells processed in this iteration. The closeness counter is incremented by one.

9. The preference calculation process continues until there are no more adjacent cells to process. At that point, the time interval (`intervalCalc`) is stopped and the `start()` function is called.

10. The `start()` function is responsible for selecting the next current cell based on the assigned priorities. The cells adjacent to the current cell are obtained and the adjacent cell with the lowest priority is selected as the next current cell. The visual representation is updated and the process is repeated until the target cell is reached.

In summary, the code performs a preference calculation on a map and finds the optimal path from a starting point to a target using priorities assigned to the cells. It is like an A* type algorithm but in which the distance between nodes is always the same, since the distance between squares does not vary.


-------------------------------------------------------------------------------------


ESP:

Así es como funciona el código:

1. Se definen varias variables y arreglos para almacenar información relevante, como las celdas de las paredes (`arrWalls`), las celdas de las carreteras (`arrRoads`), la celda actual (`actualCell`), la celda objetivo (`meta`), y otros elementos relacionados con el cálculo de preferencias.

2. La función `empezar()` es llamada para iniciar el proceso de cálculo de preferencias.

3. La función `preferenceCalc()` se llama desde `empezar()`. Esta función es responsable de llamar a las funciones `setCells()` y `setPreference()`.

4. La función `checkGoalStart()` verifica si hay un punto de inicio y un objetivo en el mapa. Se recorre el mapa y se cuenta la cantidad de celdas de tipo "actual" y "meta". Si el recuento no es igual a 2, se muestra un mensaje de error.

5. La función `setCells()` se encarga de inicializar los arreglos `arrWalls` y `arrRoads`, y de asignar valores a las variables `actualCell` y `meta`. También agrega la celda objetivo (`meta`) al arreglo `arrCuadrosAct`.

6. La función `setPreference()` es llamada desde `preferenceCalc()`. Esta función llama a `setCells()` y luego inicia un intervalo de tiempo (`intervalCalc`) que ejecuta la función `calcPref()` cada 50 milisegundos.

7. La función `calcPref()` es el núcleo del cálculo de preferencias. Recorre las celdas actuales en el arreglo `arrCuadrosAct` y examina sus celdas adyacentes (arriba, abajo, izquierda y derecha). Si una celda adyacente es una carretera (`arrRoads`) y aún no tiene una prioridad asignada (`prio`), se le asigna una prioridad basada en el contador de cercanía (`contadorDeCercania`). También actualiza la representación visual si la opción `visualizarPeso` está habilitada.

8. Después de recorrer todas las celdas actuales y asignar prioridades a las celdas adyacentes, se actualiza el arreglo `arrCuadrosAct` con las celdas adyacentes procesadas en esta iteración. El contador de cercanía se incrementa en uno.

9. El proceso de cálculo de preferencias continúa hasta que no haya más celdas adyacentes que procesar. En ese momento, se detiene el intervalo de tiempo (`intervalCalc`) y se llama a la función `start()`.

10. La función `start()` se encarga de seleccionar la siguiente celda actual basada en las prioridades asignadas. Se obtienen las celdas adyacentes a la celda actual y se selecciona la celda adyacente con la prioridad más baja como siguiente celda actual. Se actualiza la representación visual y se repite el proceso hasta que se alcance la celda objetivo.

En resumen, el código realiza un cálculo de preferencias en un mapa y encuentra el camino óptimo desde un punto de inicio hasta un objetivo utilizando prioridades asignadas a las celdas. Es como un algoritmo de tipo A* pero en el que la distancia entre nodos es siempre la misma, ya que la distancia entre cuadrados no varía.
