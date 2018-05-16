'use strict';

//input: www.thinkful.com / tauh ida parv een
//output: www.thinkful.com % 20 / tauh % 20ida % 20parv % 20een

function urlify(string){
  let newString=string.replace(/ /g, '%20');
  return newString;
}
console. log(urlify('Hello everybody so glad to see you!'));