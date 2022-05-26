function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

function Family(name, age, hobby, familyName) {
  Person.call(this, name, age, hobby);
  this.familyName = familyName;
}

Family.prototype = Object.create(Person.prototype);
Family.prototype.constructor = Family;

Person.prototype.foo = function () {
  console.log("HelloWorld");
};

const Park = new Family("yunseong", 24, "guitar", "Park");

Park.foo();
