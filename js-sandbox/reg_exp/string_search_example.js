const id = 'abc123';
const id2 = 'afgnsdgk3455635';
const idReg = /^[A-Za-z0-9]{4,10}$/;

console.log(idReg.test(id));
console.log(idReg.test(id2));