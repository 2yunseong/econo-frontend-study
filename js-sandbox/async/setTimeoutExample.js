let timerId = setTimeout(function tick() {
  console.log("째깍");
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
