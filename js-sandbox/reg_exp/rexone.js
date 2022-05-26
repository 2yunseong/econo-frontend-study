const target = 'abcde';
const regExp = /abc/
let lst = regExp.exec(target);
console.log(lst);

for(let i=0; i<lst.length; i++){
    console.log(lst[i]);
}

console.log(lst['index']);
console.log(lst['input']);

