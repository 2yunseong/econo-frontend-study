const p ={
name:"yunseog",
attr:"cute",
color:"purple" 
};

const {color, ...rest} = p;
const {attr, ...rests} = p;
console.log(color);
console.log(rest);
console.log(rests);

