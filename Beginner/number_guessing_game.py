""" Number Guessing Game 
El proyecto consiste en realizar el siguiente juego:
1.- La computadora elige un número al azar
2.- El jugador Intenta adivinarlo
3.- La computadora da pistas como 'más alto' o 'más bajo'
4.- El juego termina cuando el jugador acierta
Condiciones: 
1.- Límites de intentos: si el jugador no adivina en 7 turnos, pierde
2.- Dificultad: el jugador puede escoger nivel fácil (1-50), intermedio (1-100) y dificil (1-500)"""

import random
numero_secreto = random.radint(1, 100)
intentos = 0
adivinado = False

def juego_advinando():
    print("¡Bienvenido al juego de adivinanza de números")
    print("Escoge la dificultad del juego: 1 para fácil (de 1 a 50), 2 para intermedio (de 1 a 100), 3 para dificil (de 1 a 500)")

    dificultad = input("Coloca el número de dificultad: ")
    if dificultad == 1: 
        print("Dificultdad")

if __name__ == "__main__":
    juego_adivinanda()