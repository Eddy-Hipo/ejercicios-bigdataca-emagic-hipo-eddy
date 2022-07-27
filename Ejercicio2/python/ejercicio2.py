# Función que convierte la letra en número, si la letra no existe devuelve un valor de -1 para luego hacer validaciones.
def convertCharToInt(caracter):
    if(caracter == "I"):
        return 1
    elif(caracter == "V"):
        return 5
    elif(caracter == "X"):
        return 10
    elif(caracter == "L"):
        return 50
    elif(caracter == "C"):
        return 100
    elif(caracter == "D"):
        return 500
    elif(caracter == "M"):
        return 1000
    else:
        return -1


# Función que convierte las letras a número decimal
def convertRomanToInt(romano):
    romanoUpper = romano.upper()
    numero = convertCharToInt(romanoUpper[0])
    if (numero == -1):
        return numero
    for i in range(1, len(romano)):
        actual = convertCharToInt(romanoUpper[i])
        anterior = convertCharToInt(romanoUpper[i - 1])
        #Verifica si la letra existe en números romanos. 
        if (actual == -1 or anterior == -1):
            return -1
        #Verifica si el numero actual es menor q el anterior, para cada caso tiene su operación
        if (actual <= anterior):
            numero += actual
        else:
            numero = numero - (anterior * 2) + actual
    return numero


# Función principal
def main():
    print("\n Ejercicio 2 \n")
    print(" Transformador de números romanos a decimales \n")
    while True:
        print(" Ingrese número Romano: ")
        word = input()
        if(word != ""):
            if (convertRomanToInt(word) != -1):
                print("\n Resultado: ", convertRomanToInt(word))
                break
            else: 
                print("Valores no admitidos, porfavor verifique el número romano")    
        else:
            print(" Porfavor, para transformar el número ingrese un valor \n")


main()