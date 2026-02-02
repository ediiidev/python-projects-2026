"""Calculator 
Para realizar el proyecto debemos tener encuenta lo siguiente:
1.-Se debe pedir al usuario 2 números y posteriormente la operación que desea realizar
2.-Se debe validar la operación y proceder a realizar el calculo
3.-Imprime en pantalla el resultado"""

operacion = input("Ingresa el tipo de operación: suma, resta, multiplicación, división: ")
valor1 = int(input("Ingresa el primer número de la operación: "))
valor2 = int(input("Ingresa el segundo número de la operación: "))

if operacion == "suma":
    print(valor1 + valor2)
elif operacion == "resta":
    print(valor1 - valor2)
elif operacion == "multiplicación" or operacion == "multiplicacion":
    print(valor1 * valor2)
elif operacion == "división" or operacion == "division" :
    print(valor1 / valor2) 
else:
    print("No colocaste un valor de operación valido")