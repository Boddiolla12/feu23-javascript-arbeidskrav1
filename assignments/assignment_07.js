export function encrypt(message, key) {
  let result = "";

  const firstUpperCase = message.toUpperCase().charCodeAt(0);
  const firstLowerCase = message.toLowerCase().charCodeAt(0);

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if (char.match(/[a-zæøå]/i)) {
      const code = message.charCodeAt(i);

      if (char === char.toUpperCase()) {
        char = String.fromCharCode(((code - firstUpperCase + key) % 26) + firstUpperCase);
      } else {
        char = String.fromCharCode(((code - firstLowerCase + key) % 26) + firstLowerCase);
      }
    }

    result += char;
  }
  return result;
}

export function decrypt(message, key) {
  let result = "";

  const firstUpperCase = message.toUpperCase().charCodeAt(0);
  const firstLowerCase = message.toLowerCase().charCodeAt(0);

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if (char.match(/[a-zæøå]/i)) {
      let code = message.charCodeAt(i);

      if (char === char.toUpperCase()) {
        char = String.fromCharCode(((code - firstUpperCase - key + 26) % 26) + firstUpperCase);
      } else {
        char = String.fromCharCode(((code - firstLowerCase - key + 26) % 26) + firstLowerCase);
      }
    }
    result += char;
  }
  return result;
}
