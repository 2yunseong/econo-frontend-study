class ClassYunSeong {
  constructor(x) {
    this.x = x;
  }
  yun() {
    console.log("yun");
  }

  seong = () => {
    console.log("seong");
  };
}

function ProtoYunSeong(x) {
  this.x = x;
  this.protoYun = function () {
    console.log("yun");
  };
}

ProtoYunSeong.prototype.protoSeong = () => {
  console.log("seong");
};

const cys1 = new ClassYunSeong(1);
const cys2 = new ClassYunSeong(2);

const pys1 = new ProtoYunSeong(1);
const pys2 = new ProtoYunSeong(2);

console.log(cys1.yun === cys2.yun);
console.log(cys1.seong === cys2.seong);

console.log(pys1.yun === pys2.yun);
console.log(pys1.seong === pys2.seong);
