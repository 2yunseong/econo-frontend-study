const Person = {
  name: "yunseong",
};

console.log(Object.getOwnPropertyDescriptor(Person, "name"));

const person = {};

Object.defineProperties(person, {
  firstName: {
    value: "yunseong",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Lee",
  },
});
