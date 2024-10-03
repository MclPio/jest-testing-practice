function caesarCipher(str, shift) {
  const letters = alphabet();
  let charArray = [];
  shift = shift % 26;

  for (let i in str) {
    let char = str[i];
    let isUpperCase = char === char.toUpperCase();
    char = char.toLowerCase();

    if (!letters.includes(char.toLowerCase())) {
      charArray.push(str[i]);
      continue;
    }

    let idx = letters.indexOf(char);
    let newIdx = (idx + shift + 26) % 26;
    let shiftedChar = letters[newIdx];
    charArray.push(isUpperCase ? shiftedChar.toUpperCase() : shiftedChar);
  }
  return charArray.join("");
}

function alphabet() {
  let letters = [];
  for (let i = 0; i < 26; i++) {
    letters.push(String.fromCharCode(97 + i));
  }
  return letters;
}

export { caesarCipher, alphabet };
