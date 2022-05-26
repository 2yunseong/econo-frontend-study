class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
}
class Family extends Person {
  constructor(name, age, hobby, familyName) {
    super(name, age, hobby);
    this.familyName = familyName;
  }
}

Person.prototype.foo = function () {
  console.log("HelloWorld");
};

const Lee = new Family("yunseong", 24, "guitar", "Lee");

Lee.foo();
