// Función que verifica si se ingresó el número romano
const transformNumber = () => {
  const wordValue = document.getElementById("word1").value;
  wordValue !== "" 
    ? document.getElementById("result").innerHTML = convertRomanToInt(wordValue) !== -1 
                                                      ? convertRomanToInt(wordValue) 
                                                      : "Valores no admitidos, porfavor verifique el número romano"
    : alert("Porfavor, para transformar el número ingrese un valor")
}

// Función que convierte las letras a número decimal
const convertRomanToInt = (romano) => {
  romanoUpper = romano.toUpperCase();
  let numero = convertCharToInt(romanoUpper.charAt(0));
  if (numero == -1){
    return -1;
  }
  let anterior;
  let actual;
  // Iteración por cada letra
  for (let i = 1; i < romano.length; ++i) {
    //console.log("iteracón: ", i)
    actual = convertCharToInt(romanoUpper.charAt(i));
    anterior = convertCharToInt(romanoUpper.charAt(i - 1));
    //Verifica si la letra existe en números romanos. 
    if (actual == -1 || anterior == -1){
      return -1;
    }
    //Verifica si el numero actual es menor q el anterior, para cada caso tiene su operación
    if (actual <= anterior) {
      numero += actual;
    } else {
      numero = numero - (anterior * 2) + actual;
    }
  }
  return numero;
}

// Función que convierte la letra en número, si la letra no existe devuelve un valor de -1 para luego hacer validaciones.
const convertCharToInt = (caracter) => {
    switch (caracter) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

// Función para limpiar los campos del usuario
const clearValues = () =>{
  document.getElementById("word1").value = "";
  document.getElementById("result").innerHTML = "";
}