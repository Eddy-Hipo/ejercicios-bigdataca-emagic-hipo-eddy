// Palabra de prueba: babadartetrapoiuiop

// Función que verifica si se inrgesó una palabra
const checkPalindrome = () => {
  const wordValue = document.getElementById("word1").value;
  wordValue !== "" 
    ? document.getElementById("result").innerHTML = palindrome(wordValue)
    : alert("Porfavor, para verificar el sub-palíndromo ingrese una palabra")
}

// Función que separa todas los substrings y verifica si cada substring es un palíndromo, sí lo es lo almacena en un array
const palindrome = (word1) => {
  let array = [];
  for (var i = 0; i <= word1.length - 2; i++) { 
      for (var j = 3; j <= (word1.length - i); j++){
        let wordSplit = word1.substr(i, j);
        const wordReversed = wordSplit.split("").reverse().join("");
        wordReversed === wordSplit ? array.push(wordSplit) : "";
      }
  }
  return subWordMostLarge(array);
}

// Función que separa los subpalíndromos más largos para posteriormente almacenarlos y mostrarlos al usuario.
const subWordMostLarge = (subwords) => {
  let arrayList = [];
  let subList = subwords.map((item)=>{
    return {
      longitud: item.length,
      palabra: item
    }
  })
  let numMax = subList[0].longitud;

  subList.map((item)=>{
    if (item.longitud > numMax) {
      numMax = item.longitud;
    }
  })

  subList.map((item)=>{
    if (item.longitud === numMax) {
      arrayList.push(item.palabra);
    }
  })   
  return arrayList;
}

// Función para limpiar los campos del usuario
const clearValues = () =>{
  document.getElementById("word1").value = "";
  document.getElementById("result").innerHTML = "";
}