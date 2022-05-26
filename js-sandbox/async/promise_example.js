/*
1. 상태 (성공? 실패 했는지)
    pending -> fulfilled or rejected
2. producer와 consumer의 차이점을 파악
*/

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
  }, 2000);
});

const errPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("no network");
  }, 3000);
});

const finallyPromise = new Promise((resolve, reject) => {});
// 2. consumers : then, catch, finally
promise.then((value) => {
  console.log(value);
});

errPromise
  .then((value) => {
    console.log("clear!");
  })
  .catch((error) => {
    console.log("error occured!");
  })
  .finally(() => {
    console.log("finally");
  });
