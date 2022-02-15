// #1 : 선언과 함께 초기화를 시켜주면 호이스팅이 함께 이루어질까?

console.log(score); // undefined
var score = 10;
// 안 이루어진다. 말 그대로 런타임 이전에 변수 "선언" 과정만 이루어 지므로, 초기화는 이후에 이루어짐.

console.log("----v1----");
console.log(v1); // undefined
v1 = 70;
var v1;
console.log(v1); // 70
