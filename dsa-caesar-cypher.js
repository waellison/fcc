function rot13(str) {
  return doCaesarCipher(str, 13);
}

const doCaesarCipher = (str, shift) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const isAlpha = (ch) => { return alphabet.includes(ch) };
  let answer = "";

  for(let i = 0; i < str.length; i++) {
    if(!isAlpha(str[i])) {
      answer += str[i];
      continue;
    }

    let currCh = str.charCodeAt(i);
    let offset = "A".charCodeAt(0);
    let letter = ((currCh - offset + shift) % alphabet.length);
    let cypherCh = alphabet[letter];

    answer += cypherCh;
  }

  console.log(answer);
  return answer;
}

