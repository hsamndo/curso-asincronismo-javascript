## Event Loop

El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa.
Tarea asignada para mover del Task Queue al Stack, solo di el Stack está vacío.


## Memory Heap
Los objetos son asignados a un montículo (espacio grande en memoria no organizado).


## Call Stack (pila)

Apila de forma organizada las instrucciones de nuestro programa.
**LIFO (Last-in, First-out)**


## Task Queue

Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas
para pasar al Stack (pila). 

El stack debe estar vacío.


## Micro Task Queue
Las promesas tienen otra forma de ejecutarse y una prioridad superior.

## Web APIs
JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM.
Node: fs, https.
