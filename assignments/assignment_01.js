export function convertInitialLettersToUpperCase(input) {
  let inputText = "Aldri har så mange hatt så få å takke for så mye";

  let ordArray = inputText.split(" ");

  let storBokstavArray = ordArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  let storBokstavString = storBokstavArray.join(" ");

  return storBokstavString;
}
