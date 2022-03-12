const target = "Is  is are be with basis";
const regExp = /is/gi;

console.log(regExp.exec(target));
console.log(regExp.test(target));
console.log(target.match(regExp));
