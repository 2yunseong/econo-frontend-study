// calculated the sum of upVotes
const OBJECT_NUM = 1000000;
const posts = [];
for (let i = 0; i < OBJECT_NUM; i++) {
  posts.push({ id: i, upVotes: Math.random() });
}
let sum = 0;
console.log(`Array Amount : ${OBJECT_NUM}`);
console.time("reduce");
sum = posts.reduce((s, p) => (s += p.upVotes), 0);
console.timeEnd("reduce");
sum = 0;
console.time("for loop");
for (let i = 0; i < posts.length; i++) {
  sum += posts[i].upVotes;
}
console.timeEnd("for loop");
sum = 0;
console.time("for each");
posts.forEach((element) => {
  sum += element.upVotes;
});
console.timeEnd("for each");
