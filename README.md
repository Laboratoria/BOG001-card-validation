# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Investigación UX:](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Pasos del algoritmo:
- Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9])
- A todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado
- El número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

## 2. Resumen del proyecto

En este proyecto se busca construir una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. Además, de implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos
los últimos cuatro.

La web será una plataforma de compras donde la validación de los pagos sea un proceso sencillo, seguro y ágil. Los usuarios son personas interesadas en comprar artículos de tecnología en línea.

## 3. Investigación UX:

Los usuarios son personas interesadas en adquirir un producto de manera digital utilizando medios de pago en línea como lo es la tarjeta de credito, para finalizar la transacción.


## Soluciona de las necesidades de los usuarios:

Si el usuario tiene la necesidad de sentirse en un proceso nada complejo y seguro a la hora de realizar sus compras, esta manera y sus funciones puden hacer que el cliente se sienta bien.


### Feedback:
-Simplifiar el proceso y enfocarse en el objetivo del proyecto.
-Buena idea la de validar mediante un mensaje para el usuario, si la informacion registrada en valida o no.

### Interfaz de usuario (UI)