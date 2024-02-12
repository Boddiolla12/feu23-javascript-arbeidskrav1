export function findLongestName(countries) {
  // Skriv koden her
  const input = ["Sweeden", "Denmark", "Norway", "Switzerland", "Iceland", "England"];

  if (input.length === 0) {
    return null;
  }
  let longestWord = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i].length > longestWord.length) {
      longestWord = input[i];
    }
  }

  return longestWord;
}
