# Palabra de prueba: babadartetra


# Función que separa los subpalíndromos más largos para posteriormente almacenarlos y mostrarlos al usuario.
def subWordMostLArge(subwords):
    arrayList = []
    subNum = []
    for i in range(len(subwords)):
        subNum.append(len(subwords[i]))
    numMax = subNum[0]
    for j in range(len(subNum)):
        if (subNum[j] >= numMax):
            numMax = subNum[j]
    for k in range(len(subNum)):
        if (subNum[k] == numMax):
            arrayList.append(subwords[k])
    return arrayList
    

#Función que separa todas los substrings y verifica si cada substring es un palíndromo, sí lo es lo almacena en un array
def palindrome(word1):
    array = []
    for i in range(len(word1) - 1):
        for j in range(i + 3, len(word1) + 1):
            wordSplit = word1[i:j]
            if(wordSplit == "".join(reversed(wordSplit))):
                array.append(wordSplit)
    return subWordMostLArge(array)

   
# Función principal
def main():
    print("\n Ejercicio 1 \n")
    print(" Sub-Palíndromos \n")
    while True:
        print(" Ingrese una palabra: ")
        word = input()
        if(word != ""):
            print("\n Resultado(s): ", palindrome(word))
            break
        else:
            print(" Porfavor, para verificar los sub-palíndromos ingrese una palabra. \n")


main()