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

print("¡Bienvenido al juego de adivinanza de números")

def juego_advinando():    
    print("Escoge la dificultad del juego: 1 para fácil (de 1 a 50), 2 para intermedio (de 1 a 100), 3 para dificil (de 1 a 500)")
    
    intentos = 0
    adivinado = False

    dificultad = input("Coloca el número de dificultad: ")
    if dificultad == "1": 
        print("Estoy pensando en un número entre 1 y 50.")
        valor_nivel = 50
    elif dificultad == "2":
        print("Estoy pensando en un número entre 1 y 100")
        valor_nivel = 100
    elif dificultad == "3":
        print("Estoy pensando en un número entre 1 y 500")
        valor_nivel = 500
    else:
        print("No colocaste un número de dificultad correcto, vuelve a intentarlo")
    
    numero_secreto = random.randint(1, valor_nivel)
    while intentos <= 7 and not adivinado:
        # Pedimos el número al usuario
        intento_usuario = int(input("Introduce tu número: "))
    
        if intento_usuario < numero_secreto:
            print("Demasiado bajo. Intenta de nuevo.")
        elif intento_usuario > numero_secreto:
            print("Demasiado alto. Intenta de nuevo.")
        else:
            adivinado = True
            print(f"¡Felicidades! Adivinaste en {intentos} intentos.")
        intentos += 1
    if adivinado == False:
        print("No lograste pasar el Juego")

if __name__ == "__main__":
    juego_advinando()