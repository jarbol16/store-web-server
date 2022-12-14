
/**
 * Limpia del quiery que se agregara a la url
 * No e suna limpieza muy completa, pero este seria el objetivo, hacer una limpieza previa
 * @param text texto a insertar en la url
 * @returns texto limpio
 */
const encodeString = (text: string) => {
  let encoded = text
    .replace(/[\xC0-\xC5]/g, "A")
    .replace(/[\xC6]/g, "AE")
    .replace(/[\xC7]/g, "C")
    .replace(/[\xC8-\xCB]/g, "E")
    .replace(/[\xCC-\xCF]/g, "I")
    .replace(/[\xD0]/g, "D")
    .replace(/[\xD1]/g, "N")
    .replace(/[\xD2-\xD6\xD8]/g, "O")
    .replace(/[\xD9-\xDC]/g, "U")
    .replace(/[\xDD]/g, "Y")
    .replace(/[\xDE]/g, "P")
    .replace(/[\xE0-\xE5]/g, "a")
    .replace(/[\xE6]/g, "ae")
    .replace(/[\xE7]/g, "c")
    .replace(/[\xE8-\xEB]/g, "e")
    .replace(/[\xEC-\xEF]/g, "i")
    .replace(/[\xF1]/g, "n")
    .replace(/[\xF2-\xF6\xF8]/g, "o")
    .replace(/[\xF9-\xFC]/g, "u")
    .replace(/[\xFE]/g, "p")
    .replace(/[\xFD\xFF]/g, "y");

  return encodeURI(encoded);
};

/**
 * Muestra el simbolo segun el currency_id de la api
 * @param currencyId string
 * @returns string
 */
const currencyFormat = (currencyId: string): string => {
  switch (currencyId) {
    case "ARS":
      return "$";
    case "USD":
      return "U$S";
    default:
      return "$";
  }
};

//Funcion para unir un arry de string
const joinArray = (separartor: string, array: string[]) => {
  return array.join(separartor);
}


export { encodeString, currencyFormat, joinArray }