export function findLongestName(countries) {
  // Skriv koden her
  if (countries.length === 0) {
    return "";
  }

  return countries.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, "");
}
