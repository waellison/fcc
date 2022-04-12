function purifyStr(str) {
  let retval = [];
  let matchCond = /[A-Za-z0-9]/;

  for(let i = 0; i < str.length; i++) {
    let ch = str[i];
    if(ch.match(matchCond)) {
      if(ch.match(/[A-Za-z]/)) {
        retval.push(ch.toLowerCase());
      } else {
        retval.push(ch);
      }
    }
  }

  return retval.join("");
}

function palindrome(str) {
  let candidate = purifyStr(str);
  let left = 0;
  let right = candidate.length - 1;

  while(left < right) {
    if(candidate[left] != candidate[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

