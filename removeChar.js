'use strict';
const input = 'Battle of the Vowels: Hawaii vs. Grozny';

function removeVowels(string) {
//   if (string === '') {
//     return [];
//   }
  var removedVowels = '';
  for (let i = 0; i < string.length; i++) {
    if (!isVowel(string[i])) {
      removedVowels += string[i];
    }
  }
  return removedVowels;
}
function isVowel(vowels) {
  return 'aeiou'.includes(vowels);
}
console.log(removeVowels(input));

